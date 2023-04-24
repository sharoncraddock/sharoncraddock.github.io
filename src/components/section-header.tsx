interface SectionHeadingProps {
  section: string;
  heading: string;
  voiceClass: string;
}

function SectionHeading({ section, heading, voiceClass }:SectionHeadingProps){
  return (
  	<div className="text-left text-2xl pt-8 pb-8">
  	  <p className="font-sans font-bold text-white"><span className={`${voiceClass} font-mono`}>{section}.</span>{heading}</p>
  	</div>
  );
}

export default SectionHeading;