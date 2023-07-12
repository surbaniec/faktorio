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

// export const calculateRemainingDays = () => {

// }
