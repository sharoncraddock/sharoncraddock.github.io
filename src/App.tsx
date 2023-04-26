import './App.css'
import Intro from './components/intro';
import ColorChangeDemo from './components/color-change-demo';
import SectionHeader from './components/section-header';
import InitSpeechRecogition from './components/speech-recognition';
import { useState } from 'react';
import TopNav from './components/top-nav';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function App() {

  const [currentVoiceClass, setCurrentVoiceClass] = useState('lime');
  const [currentSpeechProgress, setCurrentSpeechProgress] = useState('Click the START button to say your color...');

  const vocabulary = [ 'aqua', 'fuchsia', 'lime', 'orange', 'salmon', 'violet', 'yellow' ];
  const changeByVoice = InitSpeechRecogition(setCurrentVoiceClass, setCurrentSpeechProgress);

  return (
    <>
      <TopNav />

      <div className="mt-13">
        <Intro voiceClass={currentVoiceClass} />
      </div>
      
      <div className="mt-13">
        <SectionHeader section='01' heading='About Me' voiceClass={currentVoiceClass} />
        <p className="text-base text-slate-400 font-sans max-w-3xl max-w-prose mt-6">
          I'm a frontend software engineer with almost 8 years of professional experience. In my previous role at <a href="https://www.varsitytutors.com" className={`${currentVoiceClass} underline underline-offset-2 decoration-1 hover:border-blue-400`}>Varsity Tutors</a>, I built and improved technology used by tens of thousands of students, tutors and teachers all around the world as part of their educational journeys. I also had the special experience of growing with that company as it matured from a scrappy startup through its IPO and beyond.
        </p>
        <p className="text-base text-slate-400 font-sans mt-4 max-w-3xl max-w-prose">
          As an engineer, I feel that delivering seamless, efficient and enjoyable digital experiences to the end user is my main responsibility, and is the most rewarding part of my job.
        </p>
      </div>
      
      <div className="mt-10">
        <SectionHeader section='02' heading="Some Things I've Built" voiceClass={currentVoiceClass}/>
      </div>

      <div className="mt-7">
        <p className={`${currentVoiceClass} text-md font-mono text-slate-400`}>Featured Project</p>
        <p className="text-2xl mb-5 font-sans font-bold">Voice-Controlled UI</p>
        <p className="text-base text-slate-400 font-sans mt-4 max-w-3xl max-w-prose">Use your voice to change the color of all of the colored elements on this page.</p>
        <p className="text-base text-slate-400 font-sans max-w-3xl max-w-prose">(You'll need to allow the browser to access your microphone first).</p>

        <p className="mt-4 mb-4 text-lg">Ready to try it?</p>
        <p>Click the "START" button, then say one of the following colors:</p>
        <div className="mb-4 flex flex-wrap">
          <p className="fuchsia font-mono p-1 text-lg">Fuchsia</p>
          <p className="orange font-mono p-1 text-lg">Orange</p>
          <p className="yellow font-mono p-1 text-lg">Yellow</p>
          <p className="lime font-mono p-1 text-lg">Lime</p>
          <p className="aqua font-mono p-1 text-lg">Aqua</p>
          <p className="violet font-mono p-1 text-lg">Violet</p>
          <p className="salmon font-mono p-1 text-lg">Salmon</p>
        </div>
        <button className="bg-slate-400 text-blue-950 text-sm" onClick={changeByVoice}>START</button>
        <ColorChangeDemo voiceClass={currentVoiceClass} progressMessage={currentSpeechProgress} vocab={vocabulary} />
      </div>

      <div className="mt-7">
        <p className={`${currentVoiceClass} text-md font-mono text-slate-400`}>Featured Project</p>
        <p className="text-2xl mb-5 font-sans font-bold">Recipe Extractor</p>
        <p>Coming Soon!!</p>
      </div>

      <div className="mt-7">
        <p className={`${currentVoiceClass} text-md font-mono text-slate-400`}>Featured Project</p>
        <p className="text-2xl mb-5 font-sans font-bold">Split-Flap Display</p>
        <p>Coming Soon!!</p>
      </div>
      
      <div className="mt-7 mb-13">
        <SectionHeader section='03' heading="Get in Touch" voiceClass={currentVoiceClass} />
        <p className="text-xl font-bold mt-6">Yes!</p>
        <p className="text-base text-slate-400 font-sans max-w-3xl max-w-prose mt-6">
          I am looking for new opportunities at this time.
        </p>
        <p className="text-base text-slate-400 font-sans max-w-3xl max-w-prose mt-2">
          I'd love to chat with you about your needs and goals, so feel free to reach out to me over email or LinkedIn. :)
        </p>
        <div className="w-24 flex justify-between mt-4">
            <a className="contact-link" href="https://www.linkedin.com/in/sharoncraddock/"><LinkedInIcon /></a>
            <a className="contact-link" href="mailto:sharoncraddock.tech@gmail.com?subject=Hello!&body=I%20visited%20your%20profile%20site%20and%20wanted%20to%20reach%20out!%20%3A)"><EmailIcon /></a>
        </div>

      </div>
    </>
  )
}

export default App;
