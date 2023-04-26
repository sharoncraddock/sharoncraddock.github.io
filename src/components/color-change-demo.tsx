import BoxCharacter from './box-character';

interface ColorChangeDemoProps {
  voiceClass: string;
  progressMessage: string;
  vocab: string[];
}

function ColorChangeDemo({ voiceClass, progressMessage, vocab }: ColorChangeDemoProps) {
  return (
    <>
      <div className="flex mt-4">
        <BoxCharacter voiceClass={voiceClass} />
        <div className="ml-4">
          <p className="">{progressMessage}</p>
          { !vocab.includes(voiceClass) && 
            <p className="">Hmm, I didn't hear a matching color that time, try again!</p>
          }
        </div>
      </div>
    </>
  );
}

export default ColorChangeDemo;