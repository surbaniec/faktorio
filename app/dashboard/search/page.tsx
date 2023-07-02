import { columns } from '@/components/DataTableColumns';
import { DataTable } from '@/components/ui/dataTable';
import { getCases } from '@/lib/cases';

export const dynamic = 'force-dynamic';

const SearchPage = async () => {
  const data = await JSON.parse(JSON.stringify(await getCases()));

  return (
    <section className='px-4 md:px-10 py-10'>
      <DataTable columns={columns} data={data} />
    </section>
  );
};

export default SearchPage;
