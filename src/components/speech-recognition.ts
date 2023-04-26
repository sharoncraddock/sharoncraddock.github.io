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
  const grammar = `#JSGF V1.0; grammar vocab; public color = $vocab.join(" | ")};`;
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

  return function changeByVoice() {
    recognition.start();
    console.log("Say one of the following colors: aqua, cyan, fuchsia, lime, orange, salmon, yellow");
    progressFunc("Say one of the following colors: aqua, cyan, fuchsia, lime, orange, salmon, yellow");

    recognition.onaudiostart = () => {
      console.log("Audio capturing started");
    };

    recognition.onaudioend = () => {
      console.log("Audio processing...");
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      console.log(`I heard: ${spokenText}.`);
      progressFunc(`I heard: ${spokenText}.`);
      actionFunc(spokenText.toLowerCase());
      console.log(`Confidence: ${event.results[0][0].confidence}`);
      progressFunc(`Confidence: ${event.results[0][0].confidence}`);

      recognition.onnomatch = () => {
      console.log("Bummer, I didn't hear a match!");
    };
      recognition.stop();
    };
  }
}

export default InitSpeechRecogition;