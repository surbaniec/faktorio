'use client';

import { OurUploadDropzone } from '@/components/UploadDropzone';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

const AddInvoice = () => {
  const [invoiceNumber, setInvoiceNumber] = useState<string>('');
  const [invoiceDate, setInvoiceDate] = useState<string>('');
  const [invoiceDays, setInvoiceDays] = useState<number>(60);

  return (
    <section className='flex flex-col gap-2 px-4 py-10 bg-white border rounded-md mx-4 md:mx-10 my-4 md:my-10 h-fit'>
      <ToastContainer />
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col'>
          <label htmlFor='invoiceNumber'>Numer faktury</label>
          <input
            type='text'
            id='invoiceNumber'
            placeholder='Podaj numer faktury...'
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            className='border rounded-md md:w-1/2 lg:w-1/3 px-2 py-2 active:outline-indigo-600 focus:outline-indigo-600 mt-2 placeholder:text-current'
            required
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='invoiceDate'>Data wystawienia faktury</label>
          <input
            type='date'
            id='invoiceDate'
            className='border rounded-md md:w-1/2 lg:w-1/3 px-2 py-2 active:outline-indigo-600 focus:outline-indigo-600 mt-2'
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='invoiceDays'>
            Termin płatności (dni)<span className='text-red-600'>*</span>
          </label>
          <input
            type='number'
            id='invoiceDays'
            placeholder='Podaj termin zapłaty...'
            className='border rounded-md md:w-1/2 lg:w-1/3 px-2 py-2 active:outline-indigo-600 focus:outline-indigo-600 my-2'
            value={invoiceDays}
            onChange={(e) => setInvoiceDays(+e.target.value)}
            min={7}
            max={60}
            required
          />
          <span className='text-xs font-bold'>* (min. 7 - max. 60)</span>
        </div>
      </div>
      {invoiceNumber &&
        invoiceDate &&
        invoiceDays >= 7 &&
        invoiceDays <= 60 && (
          <OurUploadDropzone
            invoiceNumber={invoiceNumber}
            setInvoiceNumber={setInvoiceNumber}
            invoiceDate={invoiceDate}
            invoiceDays={invoiceDays}
          />
        )}
    </section>
  );
};

export default AddInvoice;
