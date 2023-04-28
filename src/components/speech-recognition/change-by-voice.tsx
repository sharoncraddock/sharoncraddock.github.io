interface ChangeByVoiceProps {
  changedClass: string;
  children: React.ReactNode;
}

function ChangeByVoice({ children, changedClass }: ChangeByVoiceProps){
  return (
    <div className={changedClass}>
      { children }
    </div>
  );
}

export default ChangeByVoice;