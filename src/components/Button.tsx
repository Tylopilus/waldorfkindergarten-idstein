import Link from 'next/link';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
};
export function LinkButton(props: ButtonProps) {
  return (
    <div className="py-4 mt-4">
      <Link
        href={props.href}
        className={`font-bold text-xl leading-[normal] flex items-center justify-center py-4 px-6 rounded-2xl
				${
          props.secondary
            ? 'text-black border border-black'
            : 'text-white bg-gradient2'
        }`}>
        {props.children}
      </Link>
    </div>
  );
}
