interface ColorChangeDemoProps {
  progressMessage: string;
  displayNoMatchMessage: boolean;
}

function ColorChangeDemo({ progressMessage, displayNoMatchMessage }: ColorChangeDemoProps) {
  return (
    <>
      <div className="ml-6">
        <p className="">{progressMessage}</p>
        { displayNoMatchMessage &&
          <p className="">That wasn't a matching color, try again!</p>
        }
      </div>
    </>
  );
}

export default ColorChangeDemo;