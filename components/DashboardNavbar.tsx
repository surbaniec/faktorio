'use client';

import { useState } from 'react';
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

const DashboardNavbar = () => {
  // required:true => if there is no session, redirect to log in page
  const { data: session } = useSession({ required: true });
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className='col-span-full flex justify-between px-4 py-4 shadow-md bg-white'>
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
        <IoMdNotificationsOutline className='text-3xl md:text-4xl lg:text-3xl text-zinc-500 cursor-pointer' />
        <HiOutlineCalendar className='text-3xl md:text-4xl lg:text-3xl text-zinc-500 cursor-pointer' />
        {session?.user && (
          <Image
            src={session.user.image!}
            width={40}
            height={40}
            alt='profile'
            className='rounded-full cursor-pointer'
            onClick={() => setShowDropdown((prev) => !prev)}
          />
        )}

        {showDropdown && (
          <div className='absolute top-20 right-2 w-56 bg-white rounded-md shadow-md py-4 text-lg md:text-2xl flex flex-col gap-4 z-10'>
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
                signOut({ callbackUrl: '/' });
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
