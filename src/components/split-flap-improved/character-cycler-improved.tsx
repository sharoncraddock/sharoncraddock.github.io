import { useState, useEffect, useRef } from 'react';

interface CharacterCyclerProps {
  stopCharacter: string;
}

const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

function CharacterCyclerImproved({ stopCharacter }: LetterCyclerProps) {
  const [character, setCharacter] = useState(' ');

  const timerRef = useRef(null);

  useEffect(() => {
    for (let i = 0; i <= letters.indexOf(stopCharacter); i++) {
      timerRef.current = setTimeout(() => {
       setCharacter(letters[i])
    }, 125 * i);
  }

    return () => clearTimeout(timerRef.current);
  }, [stopCharacter]);

  return <span>{character}</span>
}

export default CharacterCyclerImproved;