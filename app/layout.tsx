import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Faktorio',
  description:
    'Aplikacja internetowa służąca do procesowania, wprowadzania i przechowywania faktur od klientów w formie elektronicznej. Użytkownik może łatwo zarządzać swoimi dokumentami finansowymi, dodawać nowe faktury, edytować już istniejące oraz generować raporty dotyczące swoich transakcji. Aplikacja umożliwia także filtrowanie i wyszukiwanie faktur po różnych kryteriach, co pozwala na szybkie i łatwe odnajdywanie potrzebnych dokumentów. Dzięki temu użytkownik może zaoszczędzić czas i poprawić swoją efektywność w zarządzaniu finansami swojej firmy.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pl'>
      <body className={roboto.className}>
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <main className='px-4 md:px-8 lg:px-0 lg:max-w-7xl mx-auto relative z-10'>
          {children}
        </main>
      </body>
    </html>
  );
}
