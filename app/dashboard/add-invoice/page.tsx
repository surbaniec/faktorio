'use client';

import '@uploadthing/react/styles.css';

import { OurUploadDropzone } from '@/components/UploadDropzone';
import { useState } from 'react';

const AddInvoice = () => {
  const [invoiceNumber, setInvoiceNumber] = useState<string>('');

  return (
    <section className='flex flex-col gap-2 px-4 py-10 bg-white border rounded-md mx-4 md:mx-10 my-4 md:my-10 h-fit'>
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
      {invoiceNumber && <OurUploadDropzone invoiceNumber={invoiceNumber} />}
    </section>
  );
};

export default AddInvoice;
