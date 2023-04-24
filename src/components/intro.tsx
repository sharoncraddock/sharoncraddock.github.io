import ChangeByVoice from './change-by-voice';

function Intro({ voiceClass }){
  return (
    <div className="p-8 m-10 text-left">
    <ChangeByVoice changedClass={voiceClass}>
      <p className="text-xl mb-5 font-mono">
          Hi, my name is
      </p>
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

      <ChangeByVoice changedClass={voiceClass}>
        <p>This sentence should change color too...</p>
      </ChangeByVoice>
    </div>
  );
}

export default Intro;