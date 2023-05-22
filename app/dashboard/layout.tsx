import DashboardNavbar from '@/components/DashboardNavbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='bg-[#F6FAFF]'>
      <DashboardNavbar />
      {children}
    </main>
  );
}
