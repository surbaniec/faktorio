import Image from 'next/image';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';

const features = [
  {
    id: 1,
    title: 'Przechowywanie faktur',
    desc: 'Otrzymuj faktury od własnych Klientów i przechowuj je w bezpiecznym miejscu.',
  },
  {
    id: 2,
    title: 'Generowanie raportów',
    desc: 'Generuj raporty finansowe, np: zestawienia zaległych płatności lub historię płatności.',
  },
  {
    id: 3,
    title: 'Przypomnienia o płatnościach',
    desc: 'Ustaw automatyczne przypomnienia o płatnościach przed upływem terkinu płatności.',
  },
];

export default function Home() {
  return (
    <section className='py-8'>
      <header className='flex '>
        <h1 className='text-3xl text-gray-900 font-extrabold flex items-center'>
          <Image
            src={'/assets/icons/invoice.png'}
            alt='invoice'
            width={40}
            height={40}
            className='mr-3'
          />
          Faktorio
        </h1>
        <button className='absolute right-5 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full duration-300'>
          Zaloguj się
        </button>
      </header>
      {/* HERO */}
      <section className='flex flex-col text-center lg:text-left mt-20 md:mt-40 lg:mt-52 lg:flex-row'>
        <div className='flex flex-col justify-center items-center grow basis-1/2 lg:basis-2/5'>
          <h2 className='text-4xl md:text-6xl font-extrabold leading-[1.15] bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>
            Zarządzaj swoimi fakturami
          </h2>
          <p className='text-xl mt-3'>
            Teraz możesz łatwo i wygodnie przechowywać, zarządzać i monitorować
            swoje faktury w jednym miejscu!
          </p>
          <button className='bg-transparent border-2 border-orange-500 hover:bg-orange-600 hover:text-white text-orange-500 font-bold py-2 px-4 rounded-full mt-5 self-center lg:self-start duration-300'>
            Dowiedz się więcej
          </button>
        </div>
        <div className='flex justify-end grow basis-1/2 lg:basis-3/5 mt-14'>
          <Image
            src='/assets/images/hero-img.svg'
            alt='hero img'
            width={650}
            height={300}
          />
        </div>
      </section>
      {/* FEATURES */}
      <section className='text-center mt-20 md:mt-40'>
        <span className='rounded-full bg-orange-200 text-orange-400 text-xs py-2 px-4 uppercase'>
          FEATURES
        </span>
        <h2 className='mt-5 mb-5 text-3xl font-bold'>
          Główne funkcje aplikacji{' '}
          <span className='font-extrabold leading-[1.15] bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>
            Faktorio
          </span>
        </h2>
        <p className='mb-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in ad
          totam veniam incidunt ex culpa est, obcaecati reprehenderit ipsum.
        </p>
        <div className='flex flex-col gap-4 md:flex-row'>
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
        </div>
      </section>
      <Footer />
    </section>
  );
}
