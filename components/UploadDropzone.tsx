'use client';

import { UploadDropzone } from '@uploadthing/react';
import { useSession } from 'next-auth/react';
import { OurFileRouter } from '../app/api/uploadthing/core';
import '@uploadthing/react/styles.css';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

type Props = {
  invoiceNumber: string;
  setInvoiceNumber: React.Dispatch<React.SetStateAction<string>>;
};

export const OurUploadDropzone = ({
  invoiceNumber,
  setInvoiceNumber,
}: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <UploadDropzone<OurFileRouter>
      endpoint='blobUploader'
      onClientUploadComplete={async (res) => {
        if (res !== undefined) {
          setInvoiceNumber('');

          // Create formData
          const formData = new FormData();
          formData.append('invoiceNumber', invoiceNumber);
          formData.append('fileUrl', res[0].fileUrl);
          formData.append('statusType', 'oczekujące');
          formData.append('senderId', JSON.stringify(session?.user?.id));
          formData.append('image', JSON.stringify(session?.user?.image));
          formData.append('name', JSON.stringify(session?.user?.name));
          formData.append('msg', 'Przesłano fakturę.');
          formData.append('date', JSON.stringify(Date.now()));

          await toast.promise(
            fetch('/api/case', {
              method: 'POST',
              body: formData,
            }),
            {
              pending: 'Przesyłanie faktury',
              success: 'Faktura przesłana 👌',
              error: 'Nie udało się przesłać faktury 🤯',
            }
          );

          // Refresh the current route and fetch new data from the server without
          // losing client-side browser or React state.
          startTransition(() => {
            router.refresh();
          });
        }
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
};
