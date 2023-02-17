import { NewsTeaser } from './NewsTeaser';

export function Aktuelles() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-center">Aktuelles</h2>
      <div className="mt-4 flex flex-col gap-4">
        <NewsTeaser
          date="01.01.2021"
          title="Hühner im Kindergarten"
          url="/"
          imgSrc="https://images.unsplash.com/photo-1502124225665-6282a0146f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=faces&w=326&h=315&q=80"
        />
        <NewsTeaser
          date="01.01.2021"
          title="Freie Plätze für das aktuelle (2021/22) und kommende (2022/23) Kindergartenjahr"
          url="/"
          imgSrc="https://images.unsplash.com/photo-1453342664588-b702c83fc822?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=faces&w=326&h=315&q=80"
        />
      </div>
    </div>
  );
}
