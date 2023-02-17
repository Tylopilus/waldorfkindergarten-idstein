import { Aktuelles } from '@/components/Aktuelles';
import { LinkButton } from '@/components/Button';
import { TextStage } from '@/components/TextStage';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  return <header></header>;
}
function Main() {
  return (
    <main>
      <section className="w-screen bg-gradient1 py-24 pb-72 px-8 rounded-br-[95px]">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-white max-w-[563px]">
            Willkommen bei dem Walldorfkindergarten Idstein
          </h1>
          <p className="text-white">
            Der Rhythmus im Tagesablauf, die Pflege guter Gewohnheiten, die
            Entdeckung und Eroberung der Welt durch die Nachahmung des Vorbildes
            der Erwachsenen um das Kind herum – das macht einen
            Waldorfkindergarten so unverwechselbar.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 mt-2">
            <Image src={'/images/image1.jpg'} width={300} height={300} alt="" />
            <Image src={'/images/image2.jpg'} width={300} height={300} alt="" />
            <Image src={'/images/image3.jpg'} width={300} height={300} alt="" />
            <Image src={'/images/image4.jpg'} width={300} height={300} alt="" />
          </div>
        </div>
      </section>
      <section className="px-8">
        <TextStage className="-mt-56">
          <p className="w-full max-w-[60ch] px-2">
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
      <section className="px-8 mt-12">
        <Aktuelles />
      </section>
      <section className="mt-12">
        <div className="bg-gradient2 h-auto aspect-[390/175]" />
        <div className="px-4">
          <TextStage className="-mt-28">
            <div className="flex flex-col gap-4">
              <h2>Kontakt</h2>
              <p>
                Wir öffnen auch regelmäßig unsere Türen für interessierte
                Familien. Wenn Sie an einem Kennenlernnachmittag teilnehmen
                möchten, nehmen Sie bitte Kontakt zu uns auf.
              </p>
              <LinkButton href="/kontakt">Zum Kontaktformular →</LinkButton>
            </div>
          </TextStage>
        </div>
      </section>
    </main>
  );
}
function Footer() {
  return (
    <footer className="bg-gradient3 rounded-tr-[6rem] px-8 py-9 mt-12">
      <div className="grid grid-cols-[auto_1fr_auto]">
        <Image
          className="col-start-1 col-end-1"
          src={'/waldorf-logo.png'}
          alt=""
          width={155}
          height={59}
        />
        <ul className="col-start-3 col-end-3 flex flex-col gap-4 text-white">
          <li>
            <Link href="/impressum">Impressum</Link>
          </li>
          <li>
            <Link href="/datenschutz">Datenschutz</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
