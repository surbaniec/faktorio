import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

type Props = {
  upcomingCasesCount: number;
  overdueCasesCount: number;
};

export const Notification = ({
  upcomingCasesCount,
  overdueCasesCount,
}: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <div>
        Nadchodzące płatności:{' '}
        <span className='text-orange-500 font-bold'>{upcomingCasesCount}</span>
      </div>
      <div>
        Opóźnione płatności:{' '}
        <span className='text-red-600 font-bold'>{overdueCasesCount}</span>
      </div>
      <div>
        <Link
          href='/dashboard/inbox'
          className='flex items-center text-xl text-indigo-800'
        >
          Przejdź do skrzynki <AiOutlineArrowRight className='ml-2' />
        </Link>
      </div>
    </div>
  );
};
