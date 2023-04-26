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

function InitSpeechRecogition(vocab, actionFunc, progressFunc){
  if (webkitSpeechRecognition && webkitSpeechGrammarList) {
    const grammar = `#JSGF V1.0; grammar vocab; public color = $vocab.join(" | ")};`;
    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
    const recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
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
}

export default InitSpeechRecogition;