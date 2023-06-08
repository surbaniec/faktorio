'use client';

import { Document, Page, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useState } from 'react';
import { IoReceiptOutline, IoChatbubblesOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillSendFill, BsInfoCircle } from 'react-icons/bs';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CaseDetailsPage = () => {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { data: session } = useSession({ required: true });

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
              Case 1 - Szczegóły <BsInfoCircle className='ml-2' />
            </h2>
            <div className='flex items-center text-lg mt-4'>
              <IoReceiptOutline className='text-xl' />{' '}
              <span className='ml-2'>12/04/2023</span>
            </div>
            <div className='flex items-center text-lg'>
              <AiOutlineMail className='text-xl' />{' '}
              <span className='ml-2'>sender@email.com</span>
            </div>
            <div className='flex items-center text-lg bg-orange-100 text-orange-400 rounded-full px-2 py-[2px] relative w-fit'>
              <div className='absolute bg-orange-400 block rounded-full w-2 h-2'></div>
              <div className='absolute bg-orange-400 block rounded-full w-2 h-2 animate-ping'></div>
              <span className='ml-4'>Oczekujące</span>
            </div>
          </div>
        </div>
        {/* Comments */}
        <div className='bg-white rounded-md border px-4 md:px-8 py-4'>
          <h2 className='font-bold text-xl text-zinc-700 flex items-center'>
            Komentarze <IoChatbubblesOutline className='ml-2' />
          </h2>
          <div className='flex flex-col mt-4 gap-4'>
            <div className='flex items-center'>
              {session?.user ? (
                <Image
                  src={session.user.image!}
                  width={40}
                  height={40}
                  alt='profile'
                  className='rounded-full cursor-pointer'
                />
              ) : (
                <Image
                  src='/assets/icons/user.png'
                  width={40}
                  height={40}
                  alt='profile'
                  className='rounded-full cursor-pointer'
                />
              )}
              <div className='ml-4'>
                <p className='font-medium'>{session?.user?.name}</p>
                <span className='text-zinc-500'>Lorem ipsum dolor sit.</span>
                <span className='text-xs text-zinc-400 ml-2'>12.03.2023</span>
              </div>
            </div>
            <div className='flex items-center'>
              {session?.user ? (
                <Image
                  src={session.user.image!}
                  width={40}
                  height={40}
                  alt='profile'
                  className='rounded-full cursor-pointer'
                />
              ) : (
                <Image
                  src='/assets/icons/user.png'
                  width={40}
                  height={40}
                  alt='profile'
                  className='rounded-full cursor-pointer'
                />
              )}
              <div className='ml-4'>
                <p className='font-medium'>{session?.user?.name}</p>
                <span className='text-zinc-500'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero, id itaque explicabo inventore repudiandae beatae
                  fugiat quod qui nostrum alias.
                </span>
                <span className='text-xs text-zinc-400 ml-2'>12.03.2023</span>
              </div>
            </div>
          </div>
        </div>
        {/* ACTIONS */}
        <div className='bg-white border rounded-md px-4 py-4'>
          <form method='post' className='flex flex-col items-start gap-4'>
            <select
              name='reason'
              id='reason'
              className='border rounded-md px-2 py-2 w-full md:w-fit'
              required
            >
              <option value='#' selected disabled>
                Wybierz status
              </option>
              <option value='approve'>Zatwierdź</option>
              <option value='reject'>Odrzuć</option>
              <option value='pending'>Brak wystarczających informacji</option>
            </select>
            <textarea
              name='comment'
              id='comment'
              cols={30}
              rows={6}
              placeholder='Dodaj komentarz...'
              required
              className='w-full px-2 py-2 border rounded-md'
            ></textarea>
            <button
              type='submit'
              className='cursor-pointer md:text-lg bg-indigo-800 text-white px-4 py-2 rounded-md flex items-center'
            >
              Wyślij <BsFillSendFill className='ml-2' />
            </button>
          </form>
        </div>
      </div>

      {/* PDF */}
      <div className='rounded-md md:mx-auto lg:flex lg:flex-col lg:basis-3/5'>
        <Document
          file={`/assets/test.pdf`}
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
            className='cursor-pointer md:text-lg bg-indigo-800 text-white px-4 py-2 rounded-md'
          >
            Poprzednia
          </button>
          <button
            type='button'
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            className='cursor-pointer md:text-lg bg-indigo-800 text-white px-4 py-2 rounded-md'
          >
            Następna
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseDetailsPage;
