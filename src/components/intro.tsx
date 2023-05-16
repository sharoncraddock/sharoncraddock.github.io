import { useContext } from 'react';
import { ColorContext } from './color-context';

function Intro(){
  const voiceClass = useContext(ColorContext);
  return (
    <div>
      <p className={`${voiceClass} text-xl pb-5 font-mono text-slate-400`}>Hi, my name is</p>

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