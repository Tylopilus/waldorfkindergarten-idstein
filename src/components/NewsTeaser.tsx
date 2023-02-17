import Link from 'next/link';

type TeaserProps = {
  title: string;
  date: string;
  url: string;
  imgSrc: string;
};

export function NewsTeaser(props: TeaserProps) {
  return (
    <div className="flex flex-col gap-4 bg-white drop-shadow rounded-[2rem]">
      <img src={props.imgSrc} alt="" className="rounded-[2rem]" />
      <div className="p-4">
        <h3>{props.title}</h3>
        <div className="text-secondary font-medium text-sm leading-loose tracking-[0.035em]">
          {props.date}
        </div>
        <Link
          href={props.url}
          className="block mt-4 leading-loose tracking=[.035em] font-medium text-sm">
          Mehr erfahren →
        </Link>
      </div>
    </div>
  );
  return null;
}
