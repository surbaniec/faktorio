'use client';

import { useState, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { IoMdNotificationsOutline } from 'react-icons/io';
import {
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineCalendar,
} from 'react-icons/hi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const DashboardNavbar = () => {
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status]);

  return (
    <nav className='flex justify-between px-4 py-4 shadow-md bg-white h-20 fixed w-full'>
      <h1 className='text-3xl text-gray-900 font-extrabold flex items-center'>
        <Image
          src={'/assets/icons/invoice.png'}
          alt='invoice'
          width={50}
          height={50}
          className='mr-3'
        />
        <span className='hidden md:block'>Faktorio</span>
      </h1>
      <div className='flex items-center relative gap-4'>
        <div className='absolute top-[4px] left-[-4px] bg-red-600 block rounded-full w-2 h-2'></div>
        <div className='absolute top-[4px] left-[-4px] bg-red-600 block rounded-full w-2 h-2 animate-ping'></div>
        <IoMdNotificationsOutline className='text-3xl md:text-4xl text-zinc-500' />
        <HiOutlineCalendar className='text-3xl md:text-4xl text-zinc-500' />
        <Image
          src={
            session?.user
              ? session.user.image!
              : '/public/assets/icons/user.png'
          }
          width={50}
          height={50}
          alt='profile'
          className='rounded-full'
          onClick={() => setShowDropdown((prev) => !prev)}
        />
        {showDropdown && (
          <div className='absolute top-20 right-2 w-56 bg-white rounded-md shadow-md py-4 text-lg md:text-2xl flex flex-col gap-4'>
            <Link
              href=''
              onClick={() => setShowDropdown(false)}
              className='flex items-center text-zinc-600 px-4'
            >
              <HiOutlineUser className='mr-2' /> Profil
            </Link>
            <Link
              href=''
              onClick={() => setShowDropdown(false)}
              className='flex items-center text-zinc-600 px-4'
            >
              <HiOutlineCog className='mr-2' /> Ustawienia
            </Link>
            <hr />
            <Link
              href=''
              onClick={() => {
                setShowDropdown(false);
                signOut();
              }}
              className='flex items-center text-zinc-600 px-4'
            >
              <HiOutlineLogout className='mr-2' /> Wyloguj się
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNavbar;
