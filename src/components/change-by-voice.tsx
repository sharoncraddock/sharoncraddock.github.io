function ChangeByVoice({ children, changedClass }){
  return (
    <div className={changedClass}>
      { children }
    </div>
  );
}

export default ChangeByVoice;