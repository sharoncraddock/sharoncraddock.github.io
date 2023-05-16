import { useContext } from 'react';
import { ColorContext } from './color-context';

interface EyebrowProps {
  text: string;
}

function Eyebrow({ text }:EyebrowProps){
  const voiceClass = useContext(ColorContext);
  return (
    <p className={`${voiceClass} text-md font-mono text-slate-400`}>{text}</p>
  );
}

export default Eyebrow;