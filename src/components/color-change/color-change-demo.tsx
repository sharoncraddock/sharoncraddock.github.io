interface ColorChangeDemoProps {
  progressMessage: string;
  displayNoMatchMessage: boolean;
}

// TODO fix message timing - ignore displayNoMatchMessage not being used for now
// @ts-expect-error
function ColorChangeDemo({ progressMessage, displayNoMatchMessage }: ColorChangeDemoProps) {
  return (
    <>
      <div className="ml-6">
        <p className="">{progressMessage}</p>
        {/*{ displayNoMatchMessage &&
          <p className="">That wasn't a matching color, try again!</p>
        }*/}
      </div>
    </>
  );
}

export default ColorChangeDemo;