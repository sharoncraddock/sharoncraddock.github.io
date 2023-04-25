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
    console.log("Say your voice command.");
    progressFunc("Say your voice command.");
    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      console.log(`Result received: ${spokenText}.`);
      progressFunc(`Result received: ${spokenText}.`);
      actionFunc(spokenText.toLowerCase());
      console.log(`Confidence: ${event.results[0][0].confidence}`);
      progressFunc(`Confidence: ${event.results[0][0].confidence}`);
      recognition.stop();
    };
  }
}

export default InitSpeechRecogition;