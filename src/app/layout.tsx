import './globals.css';
import { Raleway } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

const raleway = Raleway({ subsets: ['latin'], variable: '--raleway-font' });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <style jsx global>
        {`
          :root {
            --raleway-font: ${raleway.style.fontFamily};
          }
        `}
      </style> */}
      <html lang='en'>
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />

        <body
          className={`bg-background ${raleway.variable} mx-auto max-w-[1440px]`}
        >
          <Header />
          {children}
          <Footer />
          <div className='relative w-full px-12 '>
            <div>
              <div className='fixed  inset-0 left-8 right-8 -z-10 mx-auto h-screen max-w-[1144px] bg-white'></div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
function Header() {
  return (
    <header className='absolute top-0 left-0 right-0 isolate z-20 w-full max-w-[1440px] bg-black/40 py-4 px-8 text-black backdrop-blur-sm sm:fixed sm:left-[unset] sm:right-[unset] sm:text-white'>
      <div className='grid grid-cols-[auto_1fr_auto] '>
        <Image
          className='col-start-1 col-end-1'
          src={'/waldorf-logo.png'}
          alt=''
          width={129}
          height={44}
        />
        <Navigation />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className='mt-12 rounded-tr-[6rem] bg-gradient3 px-8 py-9'>
      <div className='grid grid-cols-[auto_1fr_auto]'>
        <Image
          className='col-start-1 col-end-1 row-start-1'
          src={'/waldorf-logo.png'}
          alt=''
          width={155}
          height={59}
        />
        <ul className='col-start-3 col-end-3 flex flex-col items-center justify-center gap-4 text-white sm:col-start-1 sm:row-start-1 sm:flex-row'>
          <li>
            <Link href='/impressum'>Impressum</Link>
          </li>
          <li>
            <Link href='/datenschutz'>Datenschutz</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
