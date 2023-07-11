import { Navbar } from '@/components/Dashboard/Navbar';
import { Sidebar } from '@/components/Dashboard/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='bg-[#F6FAFF] min-h-screen lg:grid lg:grid-cols-[300px_1fr] lg:grid-rows-[80px_1fr]'>
      <Navbar />
      <Sidebar />
      {children}
    </main>
  );
}
