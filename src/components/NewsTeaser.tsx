import Link from 'next/link';

type TeaserProps = {
  title: string;
  date: string;
  url: string;
  imgSrc: string;
};

export function NewsTeaser(props: TeaserProps) {
  return (
    <div className='@container'>
      <div className='flex flex-col gap-4 rounded-[2rem] bg-white drop-shadow @xl:flex-row'>
        <img src={props.imgSrc} alt='' className='rounded-[2rem]' />
        <div className='flex flex-col justify-center p-4'>
          <h3>{props.title}</h3>
          <div className='text-sm font-medium leading-loose tracking-[0.035em] text-secondary sm:text-xl sm:leading-[normal]'>
            {props.date}
          </div>
          <Link
            href={props.url}
            className='tracking=[.035em] mt-4 block text-sm font-medium leading-loose sm:text-2xl sm:leading-[normal]'
          >
            Mehr erfahren →
          </Link>
        </div>
      </div>
    </div>
  );
  return null;
}
