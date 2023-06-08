import { HiOutlineArrowRight } from 'react-icons/hi';

type Props = {
  currencyEx: number;
};

const CurrencyExchange = ({ currencyEx }: Props) => {
  return (
    <div
      className="rounded-md bg-white px-4 py-4 flex flex-col gap-4 border lg:bg-[url('/assets/images/stock_market.jpg')] m
lg:bg-contain lg:bg-bottom lg:bg-no-repeat"
    >
      <p className='text-lg text-zinc-600'>
        Dzisiejszy kurs wymiany walut obcych
      </p>
      <span className='text-xl font-bold'>1 EUR = {currencyEx}</span>
      <a
        href='https://nbp.pl/statystyka-i-sprawozdawczosc/kursy/'
        className='text-indigo-700 font-bold flex items-center'
      >
        Archiwalne kursy walut <HiOutlineArrowRight className='ml-2' />
      </a>
    </div>
  );
};

export default CurrencyExchange;
