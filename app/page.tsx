import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { FeatureCard } from '@/components/FeatureCard';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { Pill } from '@/components/Pill';

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
    desc: 'Ustaw automatyczne przypomnienia o płatnościach przed upływem terminu płatności.',
  },
];

export default function Home() {
  return (
    <>
      <div className='main'>
        <div className='gradient'></div>
      </div>
      <main className='px-4 py-8 md:px-8 lg:px-0 lg:max-w-7xl mx-auto relative z-10'>
        <header>
          <Nav />
        </header>
        {/* HERO */}
        <section className='flex flex-col text-center lg:text-left mt-20 md:mt-40 lg:mt-52 lg:flex-row'>
          <div className='flex flex-col justify-center items-center grow basis-1/2 lg:basis-2/5'>
            <h2 className='text-4xl md:text-6xl font-extrabold leading-[1.15] bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>
              Zarządzaj swoimi fakturami
            </h2>
            <p className='text-xl mt-3 text-zinc-600'>
              Teraz możesz łatwo i wygodnie przechowywać i monitorować swoje
              faktury w jednym miejscu!
            </p>
            <Button text='Dowiedz się więcej' />
          </div>
          <div className='flex justify-end grow basis-1/2 lg:basis-3/5 mt-14'>
            <Image
              src='/assets/images/hero-img.svg'
              alt='hero img'
              width={650}
              height={300}
              priority={true}
            />
          </div>
        </section>
        {/* FEATURES */}
        <section className='text-center mt-20 md:mt-40'>
          <Pill text='Features' />
          <h2 className='mt-5 mb-5 text-3xl font-bold text-zinc-800'>
            Główne funkcje aplikacji{' '}
            <span className='font-extrabold leading-[1.15] bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>
              Faktorio
            </span>
          </h2>
          <p className='mb-20 text-zinc-600 text-justify md:text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in
            ad totam veniam incidunt ex culpa est, obcaecati reprehenderit
            ipsum.
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
        {/* About */}
        <section className='mt-40 md:mb-20 flex flex-col items-center gap-20'>
          <div className='flex flex-col md:flex-row-reverse items-center'>
            <div className='md:basis-1/2 md:flex md:justify-center'>
              <Image
                src='/assets/images/teaser.png'
                alt='app mockup'
                width={250}
                height={450}
              />
            </div>
            <div className='mt-8 text-center md:text-right md:basis-1/2'>
              <Pill text='Kontrola' />
              <h2 className='text-2xl font-bold mt-4'>
                Kontroluj własne finanse
              </h2>
              <p className='text-zinc-500 mt-2 text-justify md:text-right'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam fugit asperiores rem alias nam neque inventore,
                voluptatum animi veniam iusto.
              </p>
              <Button text='Dowiedz się więcej' />
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:basis-1/2 md:flex md:justify-center'>
              <Image
                src='/assets/images/teaser-2.png'
                alt='app mockup'
                width={250}
                height={450}
              />
            </div>
            <div className='mt-8 text-center md:text-left md:basis-1/2'>
              <Pill text='Współpraca' />
              <h2 className='text-2xl font-bold mt-4'>
                Współpracuj z własnym zespołem
              </h2>
              <p className='text-zinc-500 mt-2 text-justify md:text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam fugit asperiores rem alias nam neque inventore,
                voluptatum animi veniam iusto.
              </p>
              <div className='flex flex-col items-center md:items-start mt-8 gap-8'>
                <div className='flex gap-4'>
                  <div className='w-12 h-12 border border-opacity-10 rounded-full border-zinc-900 flex items-center justify-center'>
                    <span className='font-bold text-lg'>01</span>
                  </div>
                  <div className='text-left'>
                    <h3 className='font-bold'>Lorem ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='w-12 h-12 border border-opacity-10 rounded-full border-zinc-900 flex items-center justify-center'>
                    <span className='font-bold text-lg'>02</span>
                  </div>
                  <div className='text-left'>
                    <h3 className='font-bold'>Lorem ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
