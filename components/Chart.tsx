'use client';

import { CaseDetails } from '@/lib/types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = [
  'Styczeń',
  'Luty',
  'Marzec',
  'Kwiecień',
  'Maj',
  'Czerwiec',
  'Lipiec',
  'Sierpień',
  'Październik',
  'Listopad',
  'Grudzień',
];

const Chart = () => {
  const [cases, setCases] = useState<number[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/case');
      const casesData: CaseDetails[] = await res.json();
      const months: number[] = Array(12).fill(0);

      casesData.forEach((caseDetail: CaseDetails) => {
        const createdAtInSeconds = parseInt(caseDetail.createdAt) / 1000;
        const date = new Date(createdAtInSeconds * 1000);
        const month = date.getMonth();

        months[month] += 1;
      });

      setCases(months);
    }

    fetchData();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Liczba otrzymanych faktur',
        data: cases,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line data={data} />;
};

export default Chart;
