import { CaseDetails, columns } from '@/components/DataTableColumns';
import { DataTable } from '@/components/ui/dataTable';

async function getData(): Promise<CaseDetails[]> {
  //TODO: FETCH DATA FROM API HERE
  return [
    {
      caseId: '1',
      invoiceNumber: '12/04/2023',
      email: 'sender@email.com',
      amount: 199,
      currency: 'PLN',
      dueDate: '12.07.2023',
      status: 'oczekujące',
    },
    // ...
  ];
}

const Inbox = async () => {
  const data = await getData();

  return (
    <section className='px-4 md:px-10 py-10'>
      <DataTable columns={columns} data={data} />
    </section>
  );
};

export default Inbox;
