import { UploadDropzone } from '@uploadthing/react';
import { useSession } from 'next-auth/react';
import { OurFileRouter } from '../app/api/uploadthing/core';

type Props = {
  invoiceNumber: string;
};

export const OurUploadDropzone = ({ invoiceNumber }: Props) => {
  const { data: session } = useSession();
  return (
    <UploadDropzone<OurFileRouter>
      endpoint='imgUploader'
      onClientUploadComplete={(res) => {
        if (res !== undefined) {
          // Do something with the response
          alert('Plik załączony pomyślnie!');

          const formData = new FormData();
          formData.append('invoiceNumber', invoiceNumber);
          formData.append('fileUrl', res[0].fileUrl);
          formData.append('senderId', session?.user?.id);

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
