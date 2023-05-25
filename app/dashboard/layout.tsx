import DashboardNavbar from '@/components/DashboardNavbar';
import DashboardSidebar from '@/components/DashboardSidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='bg-[#F6FAFF] min-h-screen grid grid-cols-[300px_1fr] grid-rows-[80px_1fr]'>
      <DashboardNavbar />
      <DashboardSidebar />
      {children}
    </main>
  );
}
