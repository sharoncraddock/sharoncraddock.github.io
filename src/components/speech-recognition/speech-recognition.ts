// TODO: configure types/signatures

import { isSafari } from 'react-device-detect';

function InitSpeechRecogition(actionFunc, progressFunc, matchMessageFunc, vocab){
  const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = isSafari;
  recognition.lang = "en-US";
  recognition.maxAlternatives = 1;

  return function changeByVoice() {
    matchMessageFunc(false);
    recognition.start();

    recognition.onaudiostart = () => {
      progressFunc("Say your color now!");
    };

    recognition.onaudioend = () => {
      progressFunc("Audio processing...");
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript.toLowerCase();
      if (!vocab.includes(spokenText)) {
        matchMessageFunc(true);
      }
      actionFunc(spokenText);
      progressFunc(`I heard "${spokenText}".`);
      recognition.stop();
    };
  }
}

export default InitSpeechRecogition;