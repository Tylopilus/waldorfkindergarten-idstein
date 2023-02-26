import { LinkButton } from './Button';
import { NewsTeaser } from './NewsTeaser';

export function Aktuelles() {
  return (
    <div className='grid gap-4 sm:grid-cols-2'>
      <h2 className='self-center text-center sm:text-left'>Aktuelles</h2>

      <NewsTeaser
        date='01.01.2021'
        title='Hühner im Kindergarten'
        url='/'
        imgSrc='https://images.unsplash.com/photo-1502124225665-6282a0146f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=faces&w=326&h=315&q=80'
      />
      <NewsTeaser
        date='01.01.2021'
        title='Freie Plätze für das aktuelle (2021/22) und kommende (2022/23) Kindergartenjahr'
        url='/'
        imgSrc='https://images.unsplash.com/photo-1453342664588-b702c83fc822?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=faces&w=326&h=315&q=80'
      />
      <div className='sm:col-start-2 sm:row-start-1 sm:max-w-fit sm:justify-self-end'>
        <LinkButton href='/aktuelles' secondary className='sm:mt-0'>
          Weitere Meldungen →
        </LinkButton>
      </div>
    </div>
  );
}
