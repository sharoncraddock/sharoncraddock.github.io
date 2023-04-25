import './App.css'
import Intro from './components/intro';
import ColorChangeDemo from './components/color-change-demo';
import SectionHeader from './components/section-header';
import InitSpeechRecogition from './components/speech-recognition';
import { useState, useEffect } from 'react';

// declare global {
//   interface Window {
//     SpeechRecognition?: any;
//     webkitSpeechRecognition?: any;
//     SpeechGrammarList?: any;
//     webkitSpeechGrammarList?: any;
//     SpeechRecognitionEvent?: any;
//     webkitSpeechRecognitionEvent?: any;
//   }
// }



function App() {

  const [currentVoiceClass, setCurrentVoiceClass] = useState('lime');
  const [currentSpeechProgress, setCurrentSpeechProgress] = useState('');

  const vocabulary = [ 'aqua', 'cyan', 'fuchsia', 'lavender', 'lime', 'orange', 'salmon', 'yellow' ];

  const changeByVoice = InitSpeechRecogition(vocabulary, setCurrentVoiceClass, setCurrentSpeechProgress);
  return (
    <>
      <Intro voiceClass={currentVoiceClass} />
      <SectionHeader section='01' heading='About Me' voiceClass={currentVoiceClass} />
      <SectionHeader section='02' heading="Some Things I've Built" voiceClass={currentVoiceClass}/>
      <ColorChangeDemo voiceClass={currentVoiceClass} progressMessage={currentSpeechProgress} />
      <button className="bg-slate-400" onClick={changeByVoice}>Listen for color</button>
      <SectionHeader section='03' heading="Get in Touch" voiceClass={currentVoiceClass} />
    </>
  )
}

export default App;
