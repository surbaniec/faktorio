import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  number: number;
  text: string;
};

const Card = ({ icon, number, text }: Props) => {
  return (
    <div className='rounded-md px-4 py-4 bg-white border flex flex-col gap-2'>
      <div className='text-indigo-700 text-xl md:text-2xl bg-zinc-100 w-12 md:w-14 h-12 md:h-14 rounded-full flex justify-center items-center'>
        {icon}
      </div>
      <span className='font-bold text-2xl md:text-3xl ml-2'>{number}</span>
      <span className='text-sm md:text-lg text-zinc-500 ml-2'>{text}</span>
    </div>
  );
};

export default Card;
