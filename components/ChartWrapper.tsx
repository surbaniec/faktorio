'use client';

import Chart from './Chart';

const ChartWrapper = () => {
  return (
    <div className='mt-10 md:w-[362] lg:w-full lg:col-span-2 bg-white flex justify-center rounded-md border px-4 py-4'>
      <Chart />
    </div>
  );
};

export default ChartWrapper;
