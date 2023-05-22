'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { HiOutlineUser, HiOutlineCog, HiOutlineLogout } from 'react-icons/hi';
import Link from 'next/link';

const DashboardNavbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className='flex justify-between px-4 py-4 shadow-md bg-white h-20'>
      <h1 className='text-3xl text-gray-900 font-extrabold flex items-center'>
        <Image
          src={'/assets/icons/invoice.png'}
          alt='invoice'
          width={40}
          height={40}
          className='mr-3'
        />
        <span className='hidden'>Faktorio</span>
      </h1>
      <div className='flex items-center'>
        <IoMdNotificationsOutline className='text-3xl text-zinc-500' />
        <Image
          src={
            session?.user ? session.user.image! : 'public/assets/icons/user.png'
          }
          width={46}
          height={46}
          alt='profile'
          className='rounded-full ml-4'
          onClick={() => setShowDropdown((prev) => !prev)}
        />
        {showDropdown && (
          <div className='absolute top-20 mt-2 right-4 w-56 bg-white rounded-md shadow-md py-4 text-lg flex flex-col gap-4'>
            <Link
              href=''
              onClick={() => setShowDropdown(false)}
              className='flex items-center text-zinc-500 px-4'
            >
              <HiOutlineUser className='mr-2' /> My Profile
            </Link>
            <Link
              href=''
              onClick={() => setShowDropdown(false)}
              className='flex items-center text-zinc-500 px-4'
            >
              <HiOutlineCog className='mr-2' /> Account Settings
            </Link>
            <hr />
            <Link
              href=''
              onClick={() => setShowDropdown(false)}
              className='flex items-center text-zinc-500 px-4'
            >
              <HiOutlineLogout className='mr-2' /> Log Out
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNavbar;
