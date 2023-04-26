import ChangeByVoice from './change-by-voice';
import BoxCharacter from './box-character';

function ColorChangeDemo({ voiceClass, progressMessage }) {
  return (
  	<>
  	  <p className="text-base text-slate-400 font-sans mt-4 max-w-3xl max-w-prose">Use your voice to change the color of all of the colored elements on this page.</p>
  	  <p className="text-base text-slate-400 font-sans max-w-3xl max-w-prose">(You'll need to allow the browser to access your microphone first).</p>
  	  <ol className="list-disc">
  	    <li className="mt-3">Step 1: Click the "Change Theme Color" button below.</li>
  	    <li className="mt-3">Step 2: Wait for the "I'm listening.." message...</li>
  	    <li className="mt-3">Step 3: Say one of the following colors out loud: aqua, cyan, fuchsia, lavender, lime, orange, salmon, or yellow.</li>
  	  </ol>
      <p className="mt-8">Directions:</p>
      <p className="ml-3">{progressMessage}</p>
  	  
  	  <div className="flex mt-4">
        <BoxCharacter voiceClass={voiceClass} />
        <div>
          <p className="ml-3">{voiceClass}</p>
        </div>
      </div>
  	</>
  );
}

export default ColorChangeDemo;