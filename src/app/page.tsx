import { Aktuelles } from '@/components/Aktuelles';
import { LinkButton } from '@/components/Button';
import { TextStage } from '@/components/TextStage';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return <Main />;
}

function Main() {
  return (
    <main>
      <section className='w-full rounded-br-[95px] bg-gradient1 py-24 px-8 pb-72 lg:py-0 lg:pl-32 lg:pr-0'>
        <div className='flex flex-col items-center gap-4 lg:flex-row lg:items-start'>
          <div className='flex flex-col md:gap-8 md:pt-[13rem] lg:pb-[10rem]'>
            <h1 className='max-w-[563px] text-white'>
              Willkommen bei dem Walldorfkindergarten Idstein
            </h1>
            <p className='block max-w-[50ch] text-white'>
              Der Rhythmus im Tagesablauf, die Pflege guter Gewohnheiten, die
              Entdeckung und Eroberung der Welt durch die Nachahmung des
              Vorbildes der Erwachsenen um das Kind herum – das macht einen
              Waldorfkindergarten so unverwechselbar.
            </p>
          </div>
          <div className='mt-2 grid grid-cols-2 md:mt-0 lg:ml-auto'>
            <Image
              src={'/images/image1.jpg'}
              width={300}
              height={300}
              alt=''
              className='row-span-2 lg:col-start-1 lg:row-end-4'
            />
            <Image
              src={'/images/image3.jpg'}
              width={300}
              height={300}
              alt=''
              className='row-span-2 lg:col-start-1 lg:row-end-6'
            />
            <Image
              src={'/images/image2.jpg'}
              width={300}
              height={300}
              alt=''
              className='row-span-2 lg:col-start-2 lg:row-end-3'
            />
            <Image
              src={'/images/image4.jpg'}
              width={300}
              height={300}
              alt=''
              className='row-span-2 lg:col-start-2 lg:row-end-5'
            />
          </div>
        </div>
      </section>

      <section className='px-8 lg:mx-32 lg:px-0'>
        <TextStage className='relative z-10 -mt-56 lg:-mt-14'>
          <p className='w-full max-w-[60ch] px-2 lg:max-w-full lg:px-32'>
            1987 aus einer Elterninitiative gegründet, versteht sich unser
            Verein als Anlaufstelle für Gleichgesinnte. Wir gehen davon aus,
            dass unsere Kinder vorwiegend durch Nachahmung lernen. Darum
            gestalten wir das Erlebnisfeld im Kindergarten so, dass die Kinder
            sinnvolle und nachvollziehbare Tätigkeiten der Erwachsenen vor Augen
            haben. Wichtig ist uns, den Kindern Geborgenheit zu geben und
            individuelle Entwicklung zuzulassen. Wir laden Sie ein, uns
            kennenzulernen und mit uns gemeinsam den Kindergarten und die
            Zukunft unserer Kinder zu gestalten.
          </p>
        </TextStage>
      </section>
      <section className='mt-12 px-8'>
        <Aktuelles />
      </section>
      <section className='mt-12'>
        <div className='h-[175px] bg-gradient2 sm:h-[300px]' />
        <div className='px-4'>
          <TextStage className='-mt-28 sm:-mt-56 sm:max-w-[80%] sm:px-32'>
            <div className='flex flex-col gap-4'>
              <h2>Kontakt</h2>
              <p>
                Wir öffnen auch regelmäßig unsere Türen für interessierte
                Familien. Wenn Sie an einem Kennenlernnachmittag teilnehmen
                möchten, nehmen Sie bitte Kontakt zu uns auf.
              </p>
              <LinkButton href='/kontakt'>Zum Kontaktformular →</LinkButton>
            </div>
          </TextStage>
        </div>
      </section>
    </main>
  );
}
