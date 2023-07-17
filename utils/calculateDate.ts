import { CaseDetails } from '@/types/types';

export const calculateDueDate = (
  dateFrom: string,
  daysAmount: number
): string => {
  const date = new Date(dateFrom);

  date.setDate(date.getDate() + daysAmount);

  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  const dueDate = year + '-' + month + '-' + day;

  return dueDate;
};

export const calculateRemainingDays = (cases: CaseDetails[]) => {
  const today = new Date();
  const result = {
    upcomingPayments: 0,
    overduePayments: 0,
  };

  cases.forEach((caseD) => {
    const dueDate = new Date(caseD.dueDate);

    const difference = Math.floor(
      (dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (difference > 0) {
      result.upcomingPayments++;
    } else {
      result.overduePayments++;
    }
  });

  return result;
};
