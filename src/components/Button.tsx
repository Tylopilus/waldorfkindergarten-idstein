import Link from 'next/link';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  className?: string;
};
export function LinkButton(props: ButtonProps) {
  return (
    <div className={`mt-4 py-4 ${props.className}`}>
      <Link
        href={props.href}
        className={`flex items-center justify-center rounded-2xl py-4 px-6 text-xl font-bold leading-[normal]
				${
          props.secondary
            ? 'border border-black text-black'
            : 'bg-gradient1 text-white'
        }`}
      >
        {props.children}
      </Link>
    </div>
  );
}
