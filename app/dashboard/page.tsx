import CalendarComponent from '@/components/Calendar';
import Card from '@/components/Card';
import ChartWrapper from '@/components/ChartWrapper';
import CurrencyExchange from '@/components/CurrencyExchange';
import { getServerSession } from 'next-auth';
import {
  IoReceiptOutline,
  IoChatbubblesOutline,
  IoThumbsUpOutline,
  IoWarningOutline,
} from 'react-icons/io5';
import { AuthOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { CaseDetails } from '@/lib/types';

type NBPApiResponse = {
  table: string;
  currency: string;
  code: string;
  rates: [no: string, effectiveDate: string, mid: number];
};

async function getCurrencyExchangeData(): Promise<NBPApiResponse> {
  const res = await fetch(
    'http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json'
  );

  return res.json();
}

async function getStatistics(): Promise<{
  cases: number;
  approved: number;
  pending: number;
}> {
  const res = await fetch('http://localhost:3000/api/case');

  const data: CaseDetails[] = await res.json();

  if (!data || data.length === 0)
    return {
      cases: 0,
      approved: 0,
      pending: 0,
    };
  else {
    const pendingCases = data.filter(function (caseD: CaseDetails) {
      return caseD.statusType === 'oczekujące';
    });
    const approvedCases = data.filter(function (caseD: CaseDetails) {
      return caseD.statusType === 'zatwierdzono';
    });
    const stats = {
      cases: data.length,
      approved: approvedCases.length,
      pending: pendingCases.length,
    };

    return stats;
  }
}

const Dashboard = async () => {
  const session = await getServerSession(AuthOptions);

  const currencyExchangeData = await getCurrencyExchangeData();
  const stats = await getStatistics();

  if (!session) {
    redirect('/');
  }

  return (
    <section className='col-span-full lg:col-auto px-4 md:px-10 py-10'>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 justify-center'>
        <Card
          icon={<IoReceiptOutline />}
          number={stats.cases}
          text='Liczba faktur'
        />
        <Card
          icon={<IoThumbsUpOutline />}
          number={stats.approved}
          text='Zatwierdzone'
        />
        <Card
          icon={<IoChatbubblesOutline />}
          number={stats.pending}
          text='Oczekujące na wyjaśnienie'
        />
        {/* TODO */}
        <Card
          icon={<IoWarningOutline />}
          number={0}
          text='Płatność przeterminowana'
        />
        <div className='flex justify-center lg:justify-start'>
          <CalendarComponent />
        </div>
        {/* TODO */}
        <ChartWrapper />
        <CurrencyExchange
          currencyEx={parseFloat(currencyExchangeData.rates[0]?.[2])}
        />
      </div>
    </section>
  );
};

export default Dashboard;
