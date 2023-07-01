import { columns } from '@/components/DataTableColumns';
import { DataTable } from '@/components/ui/dataTable';
import { getPendingCases } from '@/lib/cases';

export const revalidate = 10;

const InboxPage = async () => {
  const data = await getPendingCases();

  return (
    <section className='px-4 md:px-10 py-10'>
      <DataTable columns={columns} data={data} />
    </section>
  );
};

export default InboxPage;
