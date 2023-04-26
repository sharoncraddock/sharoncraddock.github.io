import './App.css'
import Intro from './components/intro';
import ColorChangeDemo from './components/color-change-demo';
import SectionHeader from './components/section-header';
import InitSpeechRecogition from './components/speech-recognition';
import { useState, useEffect } from 'react';
import TopNav from './components/top-nav';
import ArticleIcon from '@mui/icons-material/Article';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function App() {

  const [currentVoiceClass, setCurrentVoiceClass] = useState('lime');
  const [currentSpeechProgress, setCurrentSpeechProgress] = useState('Click the button to say your color');

  const vocabulary = [ 'aqua', 'cyan', 'fuchsia', 'lavender', 'lime', 'orange', 'salmon', 'yellow' ];

  const changeByVoice = InitSpeechRecogition(vocabulary, setCurrentVoiceClass, setCurrentSpeechProgress);
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
        <ColorChangeDemo voiceClass={currentVoiceClass} progressMessage={currentSpeechProgress} />
        <button className="rounded-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={changeByVoice}>Change Theme Color</button>
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
