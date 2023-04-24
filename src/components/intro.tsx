import ChangeByVoice from './change-by-voice';

interface IntroProps {
	voiceClass: string
}

function Intro({ voiceClass }: IntroProps ){
  return (
    <div className="text-left">
	  <ChangeByVoice changedClass={voiceClass}>
	    <p className="text-xl mb-5 font-mono">Hi, my name is</p>
	  </ChangeByVoice>

      <p className="text-6xl text-white font-sans font-bold mb-4">
        Sharon Craddock.
      </p>
      <p className="text-6xl text-slate-400 font-sans font-bold">
        Something about creating exceptional user experiences.
      </p>
      <p className="text-base text-slate-400 font-sans mt-4 max-w-lg">
        I'm a frontend software engineer who is most passionate about creating exceptional user experiences.
      </p>
    </div>
  );
}

export default Intro;