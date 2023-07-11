'use client';

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export const Nav = () => {
  const { data: session } = useSession();

  return (
    <nav className='flex'>
      <h1 className='text-3xl text-gray-900 font-extrabold flex items-center'>
        <Image
          src={'/assets/icons/invoice.png'}
          alt='invoice'
          width={40}
          height={40}
          className='mr-3'
        />
        Faktorio
      </h1>
      {session?.user ? (
        <Link
          href='/dashboard'
          className='absolute right-5 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full duration-300'
        >
          Przejdź do panelu
        </Link>
      ) : (
        <>
          <button
            className='absolute right-5 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full duration-300'
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          >
            Zaloguj się
          </button>
        </>
      )}
    </nav>
  );
};
