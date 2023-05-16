import { useContext } from 'react';
import { ColorContext } from './color-context';

interface SectionHeadingProps {
  section: string;
  heading: string;
}

function SectionHeading({ section, heading }:SectionHeadingProps){
  const voiceClass = useContext(ColorContext);
  return (
    <p className="text-2xl font-sans font-bold text-white section-heading">
      <span className={`${voiceClass} font-mono`}>{section}.</span>
      {heading}
    </p>
  );
}

export default SectionHeading;