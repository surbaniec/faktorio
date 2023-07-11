import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BsSendFill } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className='mt-10 bg-zinc-50 rounded-lg px-8 py-8 '>
      <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
        <div className='md:basis-1/3'>
          <h2 className='text-2xl text-gray-900 font-extrabold flex items-center'>
            <Image
              src={'/assets/icons/invoice.png'}
              alt='invoice'
              width={40}
              height={40}
              className='mr-3'
            />
            Faktorio
          </h2>
          <p className='mt-4 text-zinc-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='flex mt-4 gap-4 text-orange-500 text-xl'>
            <Link href='' className='hover:scale-125 ease-in-out duration-300'>
              <FaFacebookF />
            </Link>
            <Link href='' className='hover:scale-125 ease-in-out duration-300'>
              <FaTwitter />
            </Link>
            <Link href='' className='hover:scale-125 ease-in-out duration-300'>
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-4 md:basis-1/3'>
          <div>
            <p className='font-bold'>Biuro Obsługi Klienta</p>
            <a href='tel:123-456-7890' className='text-zinc-500'>
              123-456-7890
            </a>
          </div>
          <div>
            <p className='font-bold'>Wsparcie Na Żywo</p>
            <a href='mailto:support@faktorio.pl' className='text-zinc-500'>
              support@faktorio.pl
            </a>
          </div>
        </div>
        <div className='md:basis-1/3'>
          <h3 className='text-xl font-medium'>Newsletter</h3>
          <p className='text-zinc-500'>
            Zapisz się do newslettera, aby otrzymywać najnowsze wiadomości
          </p>
          <div className='relative flex h-10 w-full min-w-[200px] max-w-[24rem] mt-4'>
            <input
              type='email'
              className='peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-orange-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
              placeholder=' '
              required
            />
            <button
              className='!absolute right-1 top-1 z-10 select-none rounded bg-orange-600 py-2 px-4 text-center align-middle text-white'
              type='button'
              data-ripple-light='true'
            >
              <BsSendFill />
            </button>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Adres e-mail
            </label>
          </div>
        </div>
      </div>
      <div className='text-center text-zinc-400'>
        <span className='text-xs block mt-4'>
          &copy; Sebastian Urbaniec. Wszelkie prawa zastrzeżone
        </span>
      </div>
    </footer>
  );
};
