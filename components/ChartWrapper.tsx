'use client';

import Chart from './Chart';

const ChartWrapper = () => {
  return (
    <div className='md:w-[362] lg:w-full lg:col-span-2 bg-white flex justify-center rounded-md border py-2 px-10'>
      <Chart />
    </div>
  );
};

export default ChartWrapper;
