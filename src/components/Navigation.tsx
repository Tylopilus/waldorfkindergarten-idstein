'use client';
import Link from 'next/link';
import { useState } from 'react';
import { links } from '../app/navlinks';
import { useSelectedLayoutSegment } from 'next/navigation';

export function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const activeSegment = useSelectedLayoutSegment();

  return (
    <nav className='isolate col-start-2 col-end-2 flex items-center justify-end'>
      <button
        className={`z-20 block sm:hidden ${
          isNavExpanded ? 'text-black' : 'text-white'
        }`}
        onClick={() => {
          document.querySelector('body')?.classList.toggle('overflow-hidden');
          setIsNavExpanded(!isNavExpanded);
        }}
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
        className={cn(
          `absolute inset-0 h-screen w-full flex-col items-center justify-center gap-12 overflow-y-auto overscroll-y-contain bg-white text-center text-4xl
          sm:relative sm:flex sm:h-auto sm:w-auto sm:flex-row sm:gap-4 sm:bg-transparent sm:text-base`,
          isNavExpanded ? 'flex' : 'hidden'
        )}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Navlink props={{ activeSegment, ...link }} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
type NavlinkProps = {
  props: {
    activeSegment: string | null;
    href: string;
    targetSegment: string | null;
    title: string;
  };
};
const Navlink: React.FC<NavlinkProps> = ({ props }) => {
  const match = props.targetSegment === props.activeSegment;

  return (
    <Link
      className={cn(
        'block rounded-lg py-1 px-4 hover:bg-[hsl(165,57%,30%)] hover:text-white',
        match ? 'bg-[hsl(165,57%,19%)] text-white' : ''
      )}
      href={props.href}
    >
      {props.title}
    </Link>
  );
};
