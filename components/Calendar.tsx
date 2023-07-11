'use client';

import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

export const CalendarComponent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className='md:overflow-auto h-fit'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border bg-white'
      />
    </div>
  );
};
