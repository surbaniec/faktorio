'use client';

import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

const CalendarComponent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className='mt-10 md:overflow-auto h-fit'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border bg-white'
      />
    </div>
  );
};

export default CalendarComponent;
