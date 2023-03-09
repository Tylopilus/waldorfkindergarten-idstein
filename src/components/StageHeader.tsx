function StageHeader({ children }: { children: React.ReactNode }) {
  return (
    <section className='grid h-52 w-full items-center rounded-br-[95px] bg-gradient1 px-8 sm:h-72 lg:pl-32 lg:pr-0'>
      <div className='flex flex-col items-center gap-4 lg:flex-row lg:items-start'>
        <div className='mt-20 flex flex-col md:gap-8'>{children}</div>
      </div>
    </section>
  );
}

export { StageHeader };
