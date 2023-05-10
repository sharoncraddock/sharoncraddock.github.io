interface SplitFlapInfoProps {
  voiceClass: string;
}

function SplitFlapInfo ({ voiceClass }: SplitFlapInfoProps){
  return (
    <>
      <p className="text-base font-sans text-slate-400">
        Split-flap displays (sometimes referred to as Solari boards, after the original inventor) are considered retro or nostalgic these days, but in the pre-digital age, they were commonly used in airports and train stations to display arrival and departure times. Rows are comprised of individual characters containing a circular collection of flaps, which rotate in unison through a sequence of numbers and letters and stop on the desired character. The rotating flaps create a distinct sound that attracts attention when the information updates.
      </p>
      <p className="text-white mt-6">Need some inspiration? Click the button to display a new quote.</p>
     </>
  )
}

export default SplitFlapInfo;