import Image from 'next/image';

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
          <h1 className="text-white">
            Willkommen bei dem Walldorfkindergarten Idstein
          </h1>
          <p className="text-white">
            Der Rhythmus im Tagesablauf, die Pflege guter Gewohnheiten, die
            Entdeckung und Eroberung der Welt durch die Nachahmung des Vorbildes
            der Erwachsenen um das Kind herum – das macht einen
            Waldorfkindergarten so unverwechselbar.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 ">
            <Image src={'/images/image1.jpg'} width={300} height={300} alt="" />
            <Image src={'/images/image2.jpg'} width={300} height={300} alt="" />
            <Image src={'/images/image3.jpg'} width={300} height={300} alt="" />
            <Image src={'/images/image4.jpg'} width={300} height={300} alt="" />
          </div>
        </div>
      </section>
      <section className="px-8">
        <div className="shadow rounded-[2rem] py-6 w-[fit-content] px-8 mx-auto -mt-48 bg-primary">
          <p className="w-full max-w-[60ch]">
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
        </div>
      </section>
      <section>{/* <Aktuelles /> */}</section>
    </main>
  );
}
function Footer() {
  return <footer></footer>;
}
