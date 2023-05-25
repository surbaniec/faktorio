import CalendarComponent from '@/components/Calendar';
import Card from '@/components/Card';
import {
  IoReceiptOutline,
  IoChatbubblesOutline,
  IoThumbsUpOutline,
  IoWarningOutline,
} from 'react-icons/io5';

const Dashboard = () => {
  return (
    <section className='col-span-full lg:col-auto px-4 md:px-10 py-10'>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <Card icon={<IoReceiptOutline />} number={23} text='Liczba faktur' />
        <Card
          icon={<IoThumbsUpOutline />}
          number={5}
          text='Oczekujące na zatwierdzenie'
        />
        <Card
          icon={<IoChatbubblesOutline />}
          number={3}
          text='Oczekujące na wyjaśnienie'
        />
        <Card
          icon={<IoWarningOutline />}
          number={0}
          text='Płatność przeterminowana'
        />
        <CalendarComponent />
      </div>
    </section>
  );
};

export default Dashboard;
