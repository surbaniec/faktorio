'use client';

import { useState } from 'react';
import { BsFillSendFill } from 'react-icons/bs';

const AddInvoice = () => {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleInvoiceNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInvoiceNumber(e.target.value);
  };

  const handlePdfFileChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    setPdfFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!pdfFile) {
      console.error('PDF File not selected');
      return;
    }

    if (!invoiceNumber) {
      console.error('Please enter invoice number');
      return;
    }

    //TODO: FETCH API

    setInvoiceNumber('');
    setPdfFile(null);
  };

  return (
    <section className='px-4 py-10 bg-white border rounded-md mx-4 md:mx-10 my-4 md:my-10 h-fit'>
      <form
        className='flex flex-col items-center gap-4'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          id='invoiceNumber'
          name='invoiceNumber'
          placeholder='Numer faktury'
          className='border rounded-md px-2 py-2'
          value={invoiceNumber}
          onChange={handleInvoiceNumberChange}
          required
        />
        <input
          type='file'
          id='pdfFile'
          name='pdfFile'
          accept='application/pdf,.csv'
          onChange={handlePdfFileChange}
          required
        ></input>
        <button
          type='submit'
          className='cursor-pointer md:text-lg bg-indigo-800 text-white px-4 py-2 rounded-md flex items-center'
        >
          Wyślij <BsFillSendFill className='ml-2' />
        </button>
      </form>
    </section>
  );
};

export default AddInvoice;
