'use client';

import { useEffect, useState, useRef } from 'react';
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
import { NotificationsCard } from './NotificationsCard';

export const Navbar = () => {
  // required:true => if there is no session, redirect to log in page
  const { data: session } = useSession({ required: true });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [upcomingCasesCount, setUpcomingCasesCount] = useState(0);
  const [overdueCasesCount, setOverdueCasesCount] = useState(0);

  const notificationIconRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getNotificationCases = async () => {
      const res = await fetch('/api/case/notification');
      const data = await res.json();
      setUpcomingCasesCount(data.upcomingPayment);
      setOverdueCasesCount(data.overduePayment);
    };
    getNotificationCases();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const hidePopups = (e: MouseEvent) => {
      if (
        notificationIconRef.current &&
        !notificationIconRef.current.contains(e.target as Node)
      ) {
        setShowNotifications(false);
      }

      if (imageRef.current && !imageRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', hidePopups);

    return () => {
      document.removeEventListener('click', hidePopups);
    };
  }, []);

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
        <div
          className={`absolute top-[4px] left-[-4px] ${
            overdueCasesCount ? 'bg-red-600' : 'bg-green-600'
          } block rounded-full w-2 h-2`}
        ></div>
        <div
          className={`absolute top-[4px] left-[-4px]${
            overdueCasesCount ? 'bg-red-600' : 'bg-green-600'
          } block rounded-full w-2 h-2 animate-ping`}
        ></div>
        <div ref={notificationIconRef}>
          <IoMdNotificationsOutline
            className='text-3xl md:text-4xl lg:text-3xl text-zinc-500 cursor-pointer'
            onClick={() => setShowNotifications((prev) => !prev)}
          />
          {showNotifications && (
            <NotificationsCard
              upcomingCasesCount={upcomingCasesCount}
              overdueCasesCount={overdueCasesCount}
            />
          )}
        </div>
        <HiOutlineCalendar className='text-3xl md:text-4xl lg:text-3xl text-zinc-500 cursor-pointer' />
        {session?.user && (
          <div ref={imageRef}>
            <Image
              src={session.user.image!}
              width={40}
              height={40}
              alt='profile'
              className='rounded-full cursor-pointer'
              onClick={() => setShowDropdown((prev) => !prev)}
            />
          </div>
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
