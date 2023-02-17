type TextStageProps = {
  className?: string;
  children: React.ReactNode;
};
export function TextStage(props: TextStageProps) {
  return (
    <div
      className={`shadow rounded-[2rem] py-10 w-[fit-content] px-4 mx-auto bg-primary ${props.className}`}>
      {props.children}
    </div>
  );
}
