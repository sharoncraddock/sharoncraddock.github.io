function ColorChangeInstructions(){
  return (
    <>
    <p className="text-base text-slate-400 font-sans mt-4 max-w-3xl max-w-prose">Use your voice to change the color of all of the colored elements on this page.</p>
    <p className="text-base text-slate-400 font-sans max-w-3xl max-w-prose">(You'll need to allow the browser to access your microphone first).</p>

    <p className="mt-4 mb-4 text-lg">Ready to try it?</p>
    <p>Click the character below, and when prompted, say one of the following colors:</p>
    <div className="mb-4 flex flex-wrap">
      <p className="fuchsia font-mono p-1 text-lg">Fuchsia</p>
      <p className="orange font-mono p-1 text-lg">Orange</p>
      <p className="yellow font-mono p-1 text-lg">Yellow</p>
      <p className="lime font-mono p-1 text-lg">Lime</p>
      <p className="aqua font-mono p-1 text-lg">Aqua</p>
      <p className="violet font-mono p-1 text-lg">Violet</p>
      <p className="salmon font-mono p-1 text-lg">Salmon</p>
    </div>
    </>
  );
}

export default ColorChangeInstructions;