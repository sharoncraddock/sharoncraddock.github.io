interface SectionHeadingProps {
  section: string;
  heading: string;
  voiceClass: string;
}

function SectionHeading({ section, heading, voiceClass }:SectionHeadingProps){
  return (
  	<p className="text-2xl pt-8 pb-8 font-sans font-bold text-white section-heading">
  	  <span className={`${voiceClass} font-mono`}>{section}.</span>
  	  {heading}
  	</p>
  );
}

export default SectionHeading;