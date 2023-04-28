import './App.scss'
import Intro from './components/intro';
import ColorChangeDemo from './components/color-change/color-change-demo';
import SectionHeader from './components/section-header';
import InitSpeechRecogition from './components/speech-recognition/speech-recognition';
import { useState } from 'react';
import TopNav from './components/top-nav';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BoxCharacter from './components/color-change/box-character';
import ColorChangeInstructions from './components/color-change/color-change-instructions';
import AboutMe from './components/about-me';
import SplitFlapTable from './components/split-flap/split-flap';


function App() {

  const [currentVoiceClass, setCurrentVoiceClass] = useState('lime');
  const [currentSpeechProgress, setCurrentSpeechProgress] = useState('<-- Click this guy to say your color...');
  const [displayNoMatchMessage, setDisplayNoMatchMessage] = useState(false);
  
  const vocabulary = [ 'aqua', 'fuchsia', 'lime', 'orange', 'salmon', 'violet', 'yellow' ];
  const changeByVoice = InitSpeechRecogition(setCurrentVoiceClass, setCurrentSpeechProgress, setDisplayNoMatchMessage, vocabulary);

  return (
    <>
      <TopNav />

      <div className="mt-13">
        <Intro voiceClass={currentVoiceClass} />
      </div>
      
      <div className="mt-13">
        <SectionHeader section='01' heading='About Me' voiceClass={currentVoiceClass} />
        <AboutMe voiceClass={currentVoiceClass} />
      </div>
      
      <div className="mt-10">
        <SectionHeader section='02' heading="Some Things I've Built" voiceClass={currentVoiceClass}/>
      </div>

      <div className="mt-7">
        <p className={`${currentVoiceClass} text-md font-mono text-slate-400`}>Featured Project</p>
        <p className="text-2xl mb-5 font-sans font-bold">Voice-Controlled UI</p>
        <ColorChangeInstructions />
        <div className="flex items-center">
          <BoxCharacter voiceClass={currentVoiceClass} onPress={changeByVoice} />
          <ColorChangeDemo 
            voiceClass={currentVoiceClass} 
            progressMessage={currentSpeechProgress} 
            vocab={vocabulary} 
            displayNoMatchMessage={displayNoMatchMessage}
          />
        </div>
      </div>

      <div className="mt-7">
        <p className={`${currentVoiceClass} text-md font-mono text-slate-400`}>Featured Project</p>
        <p className="text-2xl mb-5 font-sans font-bold">Recipe Extractor</p>
        <p>Coming Soon!!</p>
      </div>

      <div className="mt-7">
        <p className={`${currentVoiceClass} text-md font-mono text-slate-400`}>Featured Project</p>
        <p className="text-2xl mb-5 font-sans font-bold">Split-Flap Display</p>
        <SplitFlapTable />
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
        <div className="w-20 flex justify-between mt-4">
            <a className="contact-link" href="https://www.linkedin.com/in/sharoncraddock/"><LinkedInIcon /></a>
            <a className="contact-link" href="mailto:sharoncraddock.tech@gmail.com?subject=Hello!&body=I%20visited%20your%20profile%20site%20and%20wanted%20to%20reach%20out!%20%3A)"><EmailIcon /></a>
        </div>

      </div>
    </>
  )
}

export default App;
