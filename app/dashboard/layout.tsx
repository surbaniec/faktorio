import DashboardNavbar from '@/components/DashboardNavbar';
import DashboardSidebar from '@/components/DashboardSidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='bg-[#F6FAFF]'>
      <DashboardNavbar />
      <DashboardSidebar />
      {children}
    </main>
  );
}
