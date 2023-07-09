import './globals.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Roboto } from 'next/font/google';
import Provider from '@/components/Provider';
import { Session } from 'next-auth';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Faktorio',
  description:
    'Aplikacja internetowa służąca do procesowania, wprowadzania i przechowywania faktur od klientów w formie elektronicznej. Użytkownik może łatwo zarządzać swoimi dokumentami finansowymi, dodawać nowe faktury, edytować już istniejące oraz generować raporty dotyczące swoich transakcji. Aplikacja umożliwia także filtrowanie i wyszukiwanie faktur po różnych kryteriach, co pozwala na szybkie i łatwe odnajdywanie potrzebnych dokumentów. Dzięki temu użytkownik może zaoszczędzić czas i poprawić swoją efektywność w zarządzaniu finansami swojej firmy.',
};

interface Props {
  session: Session | null;
  children: React.ReactNode;
}

export default function RootLayout({ children, session }: Props) {
  return (
    <html lang='pl' className='overflow-x-hidden'>
      <body
        className={`${roboto.className} relative overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
