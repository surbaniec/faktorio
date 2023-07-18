import { Notification } from '../Notification';

type Props = {
  upcomingCasesCount: number;
  overdueCasesCount: number;
};

export const NotificationsCard = ({
  upcomingCasesCount,
  overdueCasesCount,
}: Props) => {
  return (
    <div className='absolute top-20 right-2 w-72 bg-white rounded-md shadow-md py-4 px-4 flex flex-col gap-4 z-10'>
      <Notification
        upcomingCasesCount={upcomingCasesCount}
        overdueCasesCount={overdueCasesCount}
      />
    </div>
  );
};
