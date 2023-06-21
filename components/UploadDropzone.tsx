import { UploadDropzone } from '@uploadthing/react';
import { useSession } from 'next-auth/react';
import { OurFileRouter } from '../app/api/uploadthing/core';

type Props = {
  invoiceNumber: string;
  setInvoiceNumber: React.Dispatch<React.SetStateAction<string>>;
};

export const OurUploadDropzone = ({
  invoiceNumber,
  setInvoiceNumber,
}: Props) => {
  const { data: session } = useSession();
  return (
    <UploadDropzone<OurFileRouter>
      endpoint='blobUploader'
      onClientUploadComplete={(res) => {
        if (res !== undefined) {
          // Do something with the response
          alert('Plik załączony pomyślnie!');
          setInvoiceNumber('');

          // Create formData
          const image =
            typeof session?.user?.image === 'string'
              ? session?.user.image
              : JSON.stringify(session?.user?.image);
          const name =
            typeof session?.user?.name === 'string'
              ? session?.user.name
              : JSON.stringify(session?.user?.name);
          const msg = 'Przesłano fakturę.';
          const date = JSON.stringify(Date.now());

          const formData = new FormData();
          formData.append('invoiceNumber', invoiceNumber);
          formData.append('fileUrl', res[0].fileUrl);
          formData.append('statusType', 'oczekujące');
          formData.append('senderId', session?.user?.id);
          formData.append('image', image);
          formData.append('name', name);
          formData.append('msg', msg);
          formData.append('date', date);

          fetch('http://localhost:3000/api/case', {
            method: 'POST',
            body: formData,
          });
        }
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
};
