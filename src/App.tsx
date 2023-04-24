import './App.css'
import ChangeByVoice from './components/change-by-voice';
import Intro from './components/intro';
import { useState } from 'react';

function App() {

  const [currentVoiceClass, setCurrentVoiceClass] = useState('');

  
  // TODO: move all this color-changing code into its own file
  // Problem: need to call the state updating function above from within it, once it is moved
  // would also be cool to change fonts as well as an option
  const colors = [ 'aqua', 'cyan', 'fuchsia', 'lavender', 'lime', 'orange', 'salmon', 'yellow' ];

  const grammar = `#JSGF V1.0; grammar colors; public color = $colors.join(" | ")};`;
  const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
  const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
  const recognition = new SpeechRecognition();
  const speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  function changeByVoice() {
    console.log("changeByVoice called");
    console.log('currentVoiceClass is ', currentVoiceClass);
    recognition.start();
    console.log("Ready to receive a voice command.");
    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      console.log(`Result received: ${spokenText}.`);
      // need to call the state updating function here
      setCurrentVoiceClass(spokenText);
      console.log('currentVoiceClass is ', currentVoiceClass);
      console.log(`Confidence: ${event.results[0][0].confidence}`);
      recognition.stop();
    };
  }

  return (
    <>
      <Intro voiceClass={currentVoiceClass || 'lime' } />
      <button className="bg-slate-400" onClick={changeByVoice}>Listen for color</button>
    </>
  )
}

export default App;
