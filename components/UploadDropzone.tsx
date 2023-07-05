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
          // Do something with the response
          setInvoiceNumber('');

          // Create formData
          const image =
            typeof session?.user?.image === 'string'
              ? session?.user.image
              : JSON.stringify(session?.user?.image);
          const name =
            typeof session?.user?.name === 'string'
              ? session?.user.name
              : JSON.stringify(session?.user?.id);
          const id =
            typeof session?.user?.id === 'string'
              ? session?.user.id
              : JSON.stringify(session?.user?.id);
          const msg = 'Przesłano fakturę.';
          const date = JSON.stringify(Date.now());

          const formData = new FormData();
          formData.append('invoiceNumber', invoiceNumber);
          formData.append('fileUrl', res[0].fileUrl);
          formData.append('statusType', 'oczekujące');
          formData.append('senderId', id);
          formData.append('image', image);
          formData.append('name', name);
          formData.append('msg', msg);
          formData.append('date', date);

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
