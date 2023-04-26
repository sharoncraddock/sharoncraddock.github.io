// TODO: configure types/signatures

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

import { isSafari } from 'react-device-detect';

function InitSpeechRecogition(actionFunc, progressFunc){
  const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = isSafari;
  recognition.lang = "en-US";
  recognition.maxAlternatives = 1;

  return function changeByVoice() {
    recognition.start();

    recognition.onaudiostart = () => {
      progressFunc("Say your color now!");
    };

    recognition.onaudioend = () => {
      progressFunc("Audio processing...");
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript.toLowerCase();
      actionFunc(spokenText);
      progressFunc(`I heard "${spokenText}".`);
      recognition.stop();
    };
  }
}

export default InitSpeechRecogition;