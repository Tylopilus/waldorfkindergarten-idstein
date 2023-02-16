import './globals.css';
import { Raleway } from '@next/font/google';

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
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />

        <body className={raleway.variable}>{children}</body>
      </html>
    </>
  );
}
