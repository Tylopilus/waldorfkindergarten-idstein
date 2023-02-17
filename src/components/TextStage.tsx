type TextStageProps = {
  className?: string;
  children: React.ReactNode;
};
export function TextStage(props: TextStageProps) {
  return (
    <div
      className={`mx-auto w-[fit-content] rounded-[2rem] bg-primary py-10 px-4 shadow ${props.className}`}
    >
      {props.children}
    </div>
  );
}
