import { ReactNode } from 'react';
import { Progress } from '@/components/ui/progress';

type Props = {
  icon: ReactNode;
  number: number;
  text: string;
};

export const Card = ({ icon, number, text }: Props) => {
  return (
    <div className='rounded-md px-4 py-4 bg-white border flex flex-col justify-between gap-2'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
          <div className='text-indigo-700 text-xl md:text-2xl bg-zinc-100 w-12 md:w-14 h-12 md:h-14 rounded-full flex justify-center items-center'>
            {icon}
          </div>
          <span className='text-sm md:text-lg text-zinc-500 ml-2'>{text}</span>
        </div>
        <span className='font-bold text-2xl md:text-3xl lg:text-4xl ml-2 text-indigo-800 mt-4'>
          {number}
        </span>
      </div>
      <Progress value={number} />
    </div>
  );
};
