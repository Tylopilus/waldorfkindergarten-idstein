'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className='isolate col-start-2 col-end-2 flex items-center justify-end'>
      <button
        className={`z-10 block sm:hidden ${
          isNavExpanded ? 'text-black' : 'text-white'
        }`}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <ul
        className={`absolute inset-0 h-screen w-full flex-row gap-4 bg-white sm:relative sm:flex sm:h-auto sm:w-auto sm:bg-transparent ${
          isNavExpanded ? 'block' : 'hidden'
        }`}
      >
        <li>
          <Link href='/angebote'>Angebote</Link>
        </li>
        <li>
          <Link href='/ueber-uns'>Über uns</Link>
        </li>
        <li>
          <Link href='/kontakt'>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
