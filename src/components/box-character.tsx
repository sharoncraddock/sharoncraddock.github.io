import './box-character.css';

interface BoxCharacterProps {
  voiceClass: string;
}

function BoxCharacter({ voiceClass }: BoxCharacterProps){
  return (
    <div className={`bg-${voiceClass} body`}>
      <div className="eye-container">
        <div className="eyes">
        <div className="eye-white">
        <div className="eye-black eye-movement"></div>
      </div>
      <div className="eye-white">
        <div className="eye-black eye-movement"></div>
      </div>
      </div>
    </div>
      <div className="mouth-container">
        <div className="mouth"></div>
      </div>
    </div>
  );
}

export default BoxCharacter;