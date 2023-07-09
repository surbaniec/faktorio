'use client';

import { OurUploadDropzone } from '@/components/UploadDropzone';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

const AddInvoice = () => {
  const [invoiceNumber, setInvoiceNumber] = useState<string>('');

  return (
    <section className='flex flex-col gap-2 px-4 py-10 bg-white border rounded-md mx-4 md:mx-10 my-4 md:my-10 h-fit'>
      <ToastContainer />
      <div>
        <input
          type='text'
          placeholder='Podaj numer faktury...'
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
          className='border rounded-md w-full px-2 py-2 active:outline-indigo-600 focus:outline-indigo-600'
          required
        />
      </div>
      {invoiceNumber && (
        <OurUploadDropzone
          invoiceNumber={invoiceNumber}
          setInvoiceNumber={setInvoiceNumber}
        />
      )}
    </section>
  );
};

export default AddInvoice;
