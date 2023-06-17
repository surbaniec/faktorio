import DashboardNavbar from '@/components/DashboardNavbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import '@uploadthing/react/styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='bg-[#F6FAFF] min-h-screen lg:grid lg:grid-cols-[300px_1fr] lg:grid-rows-[80px_1fr]'>
      <DashboardNavbar />
      <DashboardSidebar />
      {children}
    </main>
  );
}
