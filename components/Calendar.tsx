'use client';

import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

const CalendarComponent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className='bg-white mt-10'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border'
      />
    </div>
  );
};

export default CalendarComponent;
