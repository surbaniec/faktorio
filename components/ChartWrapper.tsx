import { Chart } from './Chart';

export const ChartWrapper = () => {
  return (
    <div className='md:w-[362] lg:w-full lg:col-span-2 bg-white flex justify-center rounded-md border py-2  md:px-2 lg:px-10'>
      <Chart />
    </div>
  );
};
