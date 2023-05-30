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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Liczba otrzymanych faktur',
      font: {
        size: 14,
        weight: 500,
      },
    },
  },
};

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

const dummyData = [5, 13, 8, 7, 4, 12, 14, 11, 7, 9, 7, 3];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Faktury',
      data: dummyData,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Chart = () => {
  return <Line options={options} data={data} />;
};

export default Chart;
