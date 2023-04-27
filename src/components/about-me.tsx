interface AboutMeProps {
  voiceClass: string;
}

function AboutMe({ voiceClass }: AboutMeProps) {
  return (
    <>
      <p className="text-base text-slate-400 font-sans max-w-3xl max-w-prose mt-6">
        I'm a frontend software engineer with almost 8 years of professional experience. In my previous role at <a href="https://www.varsitytutors.com" className={`${voiceClass} underline underline-offset-2 decoration-1 hover:border-blue-400`}>Varsity Tutors</a>, I built and improved technology used by tens of thousands of students, tutors and teachers all around the world as part of their educational journeys. I also had the special experience of growing with that company as it matured from a scrappy startup through its IPO and beyond.
      </p>
      <p className="text-base text-slate-400 font-sans mt-4 max-w-3xl max-w-prose">
        As an engineer, I feel that delivering seamless, efficient and enjoyable digital experiences to the end user is my main responsibility, and is the most rewarding part of my job.
      </p>
    </>
  );
}

export default AboutMe;