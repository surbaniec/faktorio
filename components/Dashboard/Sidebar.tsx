'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  AiOutlineDashboard,
  AiOutlineFileSearch,
  AiOutlineFileAdd,
} from 'react-icons/ai';
import {
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineCalendar,
} from 'react-icons/hi';
import { HiOutlineInboxArrowDown } from 'react-icons/hi2';

export const Sidebar = () => {
  const pathname = usePathname();
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      {/* MOBILE SIDEBAR */}
      <div className='fixed bottom-10 duration-300 z-50 left-4'>
        <button
          className='relative group lg:hidden'
          onClick={() => setToggleSidebar((prev) => !prev)}
        >
          <div
            className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-indigo-800 ring-0 ring-indigo-800 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md`}
          >
            <div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>
              <div
                className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  toggleSidebar && 'translate-x-10'
                }`}
              ></div>
              <div
                className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                  toggleSidebar && 'translate-x-10'
                } delay-75`}
              ></div>
              <div
                className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  toggleSidebar && 'translate-x-10'
                } delay-150`}
              ></div>

              <div
                className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
                  toggleSidebar && 'translate-x-0 w-12'
                } flex w-0`}
              >
                <div
                  className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                    toggleSidebar && 'rotate-45'
                  }`}
                ></div>
                <div
                  className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                    toggleSidebar && '-rotate-45'
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </button>
      </div>
      <nav
        className={`bg-white w-72 md:w-96 rounded-md px-4 pt-8 pb-4 fixed lg:hidden top-24 shadow-md duration-300 z-50 ${
          toggleSidebar ? 'left-0' : 'left-[-1000px]'
        }`}
      >
        <ul className='text-lg md:text-2xl text-zinc-600 flex flex-col gap-4'>
          <li
            className={`hover:bg-indigo-700 hover:text-white rounded-md px-4 py-2 duration-200 ${
              pathname === '/dashboard' ? 'bg-indigo-800 text-white' : ''
            }`}
          >
            <Link href='/dashboard' className='flex items-center '>
              <AiOutlineDashboard className='text-xl md:text-3xl mr-2' />{' '}
              Dashboard
            </Link>
          </li>
          <li
            className={`hover:bg-indigo-700 hover:text-white rounded-md px-4 py-2 duration-200 ${
              pathname === '/dashboard/inbox' ? 'bg-indigo-800 text-white' : ''
            }`}
          >
            <Link href='/dashboard/inbox' className='flex items-center'>
              <HiOutlineInboxArrowDown className='text-xl md:text-3xl mr-2' />{' '}
              Skrzynka
            </Link>
          </li>
          <li
            className={`hover:bg-indigo-700 hover:text-white rounded-md px-4 py-2 duration-200 ${
              pathname === '/dashboard/search' ? 'bg-indigo-800 text-white' : ''
            }`}
          >
            <Link href='/dashboard/search' className='flex items-center'>
              <AiOutlineFileSearch className='text-xl md:text-3xl mr-2' />{' '}
              Wyszukiwarka
            </Link>
          </li>
          <li
            className={`hover:bg-indigo-700 hover:text-white rounded-md px-4 py-2 duration-200 ${
              pathname === '/dashboard/add-invoice'
                ? 'bg-indigo-800 text-white'
                : ''
            }`}
          >
            <Link href='/dashboard/add-invoice' className='flex items-center'>
              <AiOutlineFileAdd className='text-xl md:text-3xl mr-2' /> Dodaj
              fakturę
            </Link>
          </li>
          <li
            className={`hover:bg-indigo-700 hover:text-white rounded-md px-4 py-2 duration-200 ${
              pathname === '/dashboard/calendar'
                ? 'bg-indigo-800 text-white'
                : ''
            }`}
          >
            <Link href='' className='flex items-center'>
              <HiOutlineCalendar className='text-xl md:text-3xl mr-2' />{' '}
              Kalendarz
            </Link>
          </li>
          <li
            className={`hover:bg-indigo-700 hover:text-white rounded-md px-4 py-2 duration-200 ${
              pathname === '/dashboard/profile'
                ? 'bg-indigo-800 text-white'
                : ''
            }`}
          >
            <Link href='' className='flex items-center'>
              <HiOutlineUser className='text-xl md:text-3xl mr-2' /> Profil
            </Link>
          </li>
          <li
            className={`hover:bg-indigo-700 hover:text-white rounded-md px-4 py-2 duration-200 ${
              pathname === '/dashboard/settings'
                ? 'bg-indigo-800 text-white'
                : ''
            }`}
          >
            <Link href='' className='flex items-center'>
              <HiOutlineCog className='text-xl md:text-3xl mr-2' /> Ustawienia
            </Link>
          </li>
          <hr />
          <li className='px-4'>
            <Link
              href=''
              className='flex items-center'
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              <HiOutlineLogout className='text-xl md:text-3xl mr-2' /> Wyloguj
              się
            </Link>
          </li>
        </ul>
      </nav>
      {/* DESKTOP SIDEBAR */}
      <nav className='hidden lg:block bg-white shadow-md rounded-md rounded-t-none px-4 py-8 border-r'>
        <ul className='text-lg md:text-lg text-zinc-600 flex flex-col h-full justify-between'>
          <div className='flex flex-col gap-8'>
            <li
              className={`hover:bg-indigo-700 hover:text-white rounded-md px-4 py-2 duration-200 ${
                pathname === '/dashboard' ? 'bg-indigo-800 text-white' : ''
              }`}
            >
              <Link href='/dashboard' className='flex items-center '>
                <AiOutlineDashboard className='text-xl md:text-3xl mr-2' />{' '}
                Dashboard
              </Link>
            </li>
            <li
              className={`hover:bg-indigo-700 hover:text-white rounded-md px-4 py-2 duration-200 ${
                pathname === '/dashboard/inbox'
                  ? 'bg-indigo-800 text-white'
                  : ''
              }`}
            >
              <Link href='/dashboard/inbox' className='flex items-center'>
                <HiOutlineInboxArrowDown className='text-xl md:text-3xl mr-2' />{' '}
                Skrzynka
              </Link>
            </li>
            <li
              className={`hover:bg-indigo-700 hover:text-white rounded-md px-4 py-2 duration-200 ${
                pathname === '/dashboard/search'
                  ? 'bg-indigo-800 text-white'
                  : ''
              }`}
            >
              <Link href='/dashboard/search' className='flex items-center'>
                <AiOutlineFileSearch className='text-xl md:text-3xl mr-2' />{' '}
                Wyszukiwarka
              </Link>
            </li>
            <li
              className={`hover:bg-indigo-700 hover:text-white rounded-md px-4 py-2 duration-200 ${
                pathname === '/dashboard/add-invoice'
                  ? 'bg-indigo-800 text-white'
                  : ''
              }`}
            >
              <Link href='/dashboard/add-invoice' className='flex items-center'>
                <AiOutlineFileAdd className='text-xl md:text-3xl mr-2' /> Dodaj
                fakturę
              </Link>
            </li>
            <li className='px-4 hover:bg-indigo-700 hover:text-white rounded-md py-2 duration-200'>
              <Link href='' className='flex items-center'>
                <HiOutlineCalendar className='text-xl md:text-3xl mr-2' />{' '}
                Kalendarz
              </Link>
            </li>
            <li className='px-4 hover:bg-indigo-700 hover:text-white rounded-md py-2 duration-200'>
              <Link href='' className='flex items-center'>
                <HiOutlineUser className='text-xl md:text-3xl mr-2' /> Profil
              </Link>
            </li>
            <li className='px-4 hover:bg-indigo-700 hover:text-white rounded-md py-2 duration-200'>
              <Link href='' className='flex items-center'>
                <HiOutlineCog className='text-xl md:text-3xl mr-2' /> Ustawienia
              </Link>
            </li>
          </div>
          <div className='flex flex-col gap-4'>
            <hr className='mb-4' />
            <li className='px-4'>
              <Link
                href=''
                className='flex items-center'
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                <HiOutlineLogout className='text-xl md:text-3xl mr-2' /> Wyloguj
                się
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};
