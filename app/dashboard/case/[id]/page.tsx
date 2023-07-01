'use client';

import { Document, Page, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useEffect, useState } from 'react';
import { IoReceiptOutline, IoChatbubblesOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillSendFill, BsInfoCircle } from 'react-icons/bs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { CaseDetails, comments } from '@/lib/types';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CaseDetailsPage = () => {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const { data: session } = useSession();

  const pathname = usePathname();
  const pathId = pathname.slice(pathname.lastIndexOf('/') + 1);

  const [caseDetails, setCaseDetails] = useState<CaseDetails>({
    _id: '',
    invoiceNumber: '',
    fileUrl: '',
    statusType: '',
    senderId: '',
    email: '',
    comments: [{ image: '', name: '', msg: '', date: '' }],
    createdAt: '',
  });

  useEffect(() => {
    const getCaseDetails = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(`/api/case/${pathId}`);
        const data = await res.json();

        const {
          _id,
          invoiceNumber,
          fileUrl,
          statusType,
          senderId,
          email,
          comments,
          createdAt,
        } = data;

        setCaseDetails({
          _id: _id,
          invoiceNumber,
          fileUrl,
          statusType,
          senderId,
          email,
          comments,
          createdAt,
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };

    getCaseDetails();

    //eslint-disable-next-line
  }, [pathId]);

  const addComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message || !status || !session?.user) {
      return;
    }

    const newComment: comments = {
      image: session.user.image!.toString(),
      name: session.user.name!.toString(),
      msg: message,
      date: Date.now().toString(),
    };

    const editedCase: CaseDetails = {
      _id: caseDetails._id,
      invoiceNumber: caseDetails.invoiceNumber,
      fileUrl: caseDetails.fileUrl,
      statusType: status,
      senderId: caseDetails.senderId,
      email: caseDetails.email,
      comments: [...caseDetails.comments, newComment],
      createdAt: caseDetails.createdAt,
    };

    try {
      await toast.promise(
        fetch(`/api/case/${pathId}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(editedCase),
        }),
        {
          pending: 'Dodawanie komentarza...',
          success: 'Komentarz dodany 👌',
          error: 'Nie udało się dodać komentarza 🤯',
        }
      );

      setMessage('');
      setStatus('');
      setCaseDetails({
        _id: caseDetails._id,
        invoiceNumber: caseDetails.invoiceNumber,
        fileUrl: caseDetails.fileUrl,
        statusType: status,
        senderId: caseDetails.senderId,
        email: caseDetails.email,
        comments: [...caseDetails.comments, newComment],
        createdAt: caseDetails.createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  };

  function onDocumentLoadSuccess({ numPages }: PDFDocumentProxy) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  if (loading) {
    return <h2 className='text-center mt-8'>Ładowanie...</h2>;
  }

  if (error) {
    return (
      <div className='mx-auto text-center'>
        <h2 className='mt-8'>Nie udało się odnaleźć żądanego case id</h2>
        <button className='rounded-md border bg-indigo-800 text-white px-4 py-2 mt-2'>
          <Link href={'/dashboard'}>Wróć do strony głównej</Link>
        </button>
      </div>
    );
  }

  return (
    <section className='px-4 md:px-10 py-10 flex flex-col gap-4 lg:flex-row-reverse'>
      <div className='flex flex-col gap-4 lg:basis-2/5'>
        {/* Invoice Details */}
        <div className='bg-white rounded-md border px-4 md:px-8 py-4'>
          <div
            className='flex flex-col gap-2 text-zinc-600
        '
          >
            <h2 className='font-bold text-xl text-zinc-700 flex items-center'>
              Case {caseDetails._id} - Szczegóły{' '}
              <BsInfoCircle className='ml-2' />
            </h2>
            <div className='flex items-center text-lg mt-4'>
              <IoReceiptOutline className='text-xl' />{' '}
              <span className='ml-2'>{caseDetails.invoiceNumber}</span>
            </div>
            <div className='flex items-center text-lg'>
              <AiOutlineMail className='text-xl' />{' '}
              <span className='ml-2'>{caseDetails.email}</span>
            </div>
            {caseDetails.statusType === 'oczekujące' && (
              <div className='flex items-center text-lg bg-orange-100 text-orange-400 rounded-full px-2 py-[2px] relative w-fit'>
                <div className='absolute bg-orange-400 block rounded-full w-2 h-2'></div>
                <div className='absolute bg-orange-400 block rounded-full w-2 h-2 animate-ping'></div>
                <span className='ml-4'>{caseDetails.statusType}</span>
              </div>
            )}
            {caseDetails.statusType === 'zatwierdzono' && (
              <div className='flex items-center text-lg bg-green-100 text-green-400 rounded-full px-2 py-[2px] relative w-fit'>
                <div className='absolute bg-green-400 block rounded-full w-2 h-2'></div>
                <div className='absolute bg-green-400 block rounded-full w-2 h-2 animate-ping'></div>
                <span className='ml-4'>{caseDetails.statusType}</span>
              </div>
            )}
            {caseDetails.statusType === 'odrzucono' && (
              <div className='flex items-center text-lg bg-red-100 text-red-400 rounded-full px-2 py-[2px] relative w-fit'>
                <div className='absolute bg-red-400 block rounded-full w-2 h-2'></div>
                <div className='absolute bg-red-400 block rounded-full w-2 h-2 animate-ping'></div>
                <span className='ml-4'>{caseDetails.statusType}</span>
              </div>
            )}
          </div>
        </div>
        {/* Comments */}
        <div className='bg-white rounded-md border px-4 md:px-8 py-4'>
          <h2 className='font-bold text-xl text-zinc-700 flex items-center'>
            Komentarze <IoChatbubblesOutline className='ml-2' />
          </h2>
          <div className='flex flex-col mt-4 gap-4 max-h-60 overflow-y-scroll'>
            {caseDetails.comments &&
              caseDetails.comments.map((comment, i) => {
                return (
                  <div className='flex items-center' key={i}>
                    <Image
                      src={comment.image}
                      width={40}
                      height={40}
                      alt='profile'
                      className='rounded-full cursor-pointer'
                    />
                    <div className='ml-4'>
                      <p className='font-medium'>{comment.name}</p>
                      <span className='text-zinc-500'>{comment.msg}</span>
                      <span className='text-xs text-zinc-400 ml-2'>
                        {new Date(+comment.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {/* ACTIONS */}
        {caseDetails.statusType === 'oczekujące' && (
          <div className='bg-white border rounded-md px-4 py-4'>
            <form
              className='flex flex-col items-start gap-4'
              onSubmit={addComment}
            >
              <select
                name='reason'
                id='reason'
                className='border rounded-md px-2 py-2 w-full md:w-fit'
                required
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value='' disabled>
                  Wybierz status
                </option>
                <option value='zatwierdzono'>Zatwierdź</option>
                <option value='odrzucono'>Odrzuć</option>
                <option value='oczekujące'>
                  Brak wystarczających informacji
                </option>
              </select>
              <textarea
                name='comment'
                id='comment'
                cols={30}
                rows={6}
                placeholder='Dodaj komentarz...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className='w-full px-2 py-2 border rounded-md focus:outline-indigo-800'
              ></textarea>
              <button
                type='submit'
                className='cursor-pointer md:text-lg !bg-indigo-800 text-white px-4 py-2 rounded-md flex items-center'
              >
                Wyślij <BsFillSendFill className='ml-2' />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* PDF */}
      <div className='rounded-md md:mx-auto lg:flex lg:flex-col lg:basis-3/5'>
        <Document
          file={caseDetails.fileUrl}
          renderMode='canvas'
          error='Nie udało się załadować pliku.'
          onLoadSuccess={onDocumentLoadSuccess}
          className='overflow-x-scroll md:w-fit lg:self-center'
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p className='text-center text-zinc-500 text-lg mt-2'>
          Strona {pageNumber || (numPages ? 1 : '--')} z {numPages || '--'}
        </p>
        <div className='flex gap-4 justify-center mt-2'>
          <button
            type='button'
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className='cursor-pointer md:text-lg !bg-indigo-800 text-white px-4 py-2 rounded-md'
          >
            Poprzednia
          </button>
          <button
            type='button'
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            className='cursor-pointer md:text-lg !bg-indigo-800 text-white px-4 py-2 rounded-md'
          >
            Następna
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseDetailsPage;
