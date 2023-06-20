import { columns } from '@/components/DataTableColumns';
import { DataTable } from '@/components/ui/dataTable';

async function getData() {
  const res = await fetch('http://localhost:3000/api/case', {
    next: { revalidate: 10 },
  });

  return res.json();
}

const SearchPage = async () => {
  const data = await getData();

  return (
    <section className='px-4 md:px-10 py-10'>
      <DataTable columns={columns} data={data} />
    </section>
  );
};

export default SearchPage;
