import ChangeByVoice from './change-by-voice';
import BoxCharacter from './box-character';

function ColorChangeDemo({ voiceClass, progressMessage }) {
  return (
  	<>
  	  <p className="text-md font-mono text-slate-400">Featured Project</p>
  	  <p className="text-2xl mb-5 font-sans font-bold">Voice-Controlled UI</p>
  	  <div className="">
        <BoxCharacter voiceClass={voiceClass} />
        <p>{voiceClass}</p>
        <p>{progressMessage}</p>
      </div>
  	</>
  );
}

export default ColorChangeDemo;