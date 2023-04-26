import ChangeByVoice from './change-by-voice';

interface IntroProps {
  voiceClass: string;
}

function Intro({ voiceClass }: IntroProps ){
  return (
    <div>
    <ChangeByVoice changedClass={voiceClass}>
      <p className="text-xl pb-5 font-mono">Hi, my name is</p>
    </ChangeByVoice>

      <p className="text-5xl leading-11 md:text-6xl text-white font-sans font-bold mb-4">
        Sharon Craddock.
      </p>
      <p className="text-3xl md:text-6xl text-slate-400 font-sans font-bold">
        I'm passionate about creating exceptional user experiences.
      </p>
    </div>
  );
}

export default Intro;