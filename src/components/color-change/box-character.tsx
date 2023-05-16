import './box-character.scss';
import { useContext } from 'react';
import { ColorContext } from '../../components/color-context';

interface BoxCharacterProps {
  onPress: () => void;
}

function BoxCharacter({ onPress }: BoxCharacterProps){
  const voiceClass = useContext(ColorContext);
  return (
    <button className="p-0 pulse hover:bg-violet-600 focus:ring focus:ring-violet-300" onClick={onPress}>
      <div className={`bg-slate-400 bg-${voiceClass} body`}>
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
    </button>
  );
}

export default BoxCharacter;