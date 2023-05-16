import './App.scss'
import Intro from './components/intro';
import ColorChangeDemo from './components/color-change/color-change-demo';
import SectionHeader from './components/section-header';
import InitSpeechRecogition from './components/speech-recognition/speech-recognition';
import { useState } from 'react';
import TopNav from './components/top-nav';
import BoxCharacter from './components/color-change/box-character';
import ColorChangeInstructions from './components/color-change/color-change-instructions';
import { ColorContext } from './components/color-context';
import AboutMe from './components/about-me';
import GetInTouch from './components/get-in-touch';
import { ErrorBoundary } from "react-error-boundary";
import SplitFlapInfo from './components/split-flap/split-flap-info';
import SplitFlapImproved from './components/split-flap-improved/split-flap-improved';
import Eyebrow from './components/eyebrow';


function App() {

  const [currentVoiceClass, setCurrentVoiceClass] = useState('lime');
  const [currentSpeechProgress, setCurrentSpeechProgress] = useState('<-- Click this guy to say your color...');
  const [displayNoMatchMessage, setDisplayNoMatchMessage] = useState(false);
  
  const vocabulary = [ 'aqua', 'fuchsia', 'lime', 'orange', 'salmon', 'violet', 'yellow' ];
  const changeByVoice = InitSpeechRecogition(setCurrentVoiceClass, setCurrentSpeechProgress, setDisplayNoMatchMessage, vocabulary);

  return (
    <>
      <TopNav />
      <ColorContext.Provider value={currentVoiceClass}>
        <div className="mt-13">
          <Intro />
        </div>
        
        <div className="mt-13">
          <SectionHeader 
            section='01'
            heading='About Me' 
          />
          <AboutMe />
        </div>
        
        <div className="mt-10">
          <SectionHeader 
            section='02' 
            heading="Some Things I've Built" 
          />
        </div>

        <div className="mt-7">
          <Eyebrow text="Featured Project" />
          <p className="text-2xl mb-5 font-sans font-bold">Voice-Controlled UI</p>
          <ColorChangeInstructions />
          <div className="flex items-center">
            <BoxCharacter onPress={changeByVoice} />
            <ColorChangeDemo 
              progressMessage={currentSpeechProgress} 
              vocab={vocabulary} 
              displayNoMatchMessage={displayNoMatchMessage}
            />
          </div>
        </div>

        <div className="mt-7">
          <Eyebrow text="Featured Project" />
          <p className="text-2xl mb-5 font-sans font-bold">Solari/Split-Flap Display</p>
          <SplitFlapInfo />
          <ErrorBoundary fallback={<div>Oops, something went wrong! :(</div>}>
            <SplitFlapImproved />
          </ErrorBoundary>
        </div>

        <div className="mt-7">
          <Eyebrow text="Featured Project" />
          <p className="text-2xl mb-5 font-sans font-bold">Recipe Extractor</p>
          <p>Coming Soon!!</p>
        </div>
        
        <div className="mt-7 mb-13">
          <SectionHeader section='03' heading="Get in Touch" />
          <GetInTouch />
        </div>
      </ColorContext.Provider>
    </>
  )
}

export default App;
