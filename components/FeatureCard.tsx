import { BsLayersFill } from 'react-icons/bs';

type Props = {
  title: string;
  desc: string;
};

export const FeatureCard = ({ title, desc }: Props) => {
  return (
    <div className='bg-white hover:shadow-md duration-200 rounded-lg py-8 px-8 text-left'>
      <div className='bg-orange-500 w-16 h-16 flex justify-center items-center rounded-lg mb-4'>
        <BsLayersFill
          style={{ width: '25px', height: 'auto', color: '#fff' }}
        />
      </div>
      <h3 className='font-bold text-2xl text-zinc-800'>{title}</h3>
      <p className='mt-1'>{desc}</p>
    </div>
  );
};
