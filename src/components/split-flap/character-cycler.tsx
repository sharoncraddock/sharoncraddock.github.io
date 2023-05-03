import { useState, useEffect } from 'react';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// prettier-ignore
const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
// prettier-ignore
const commonPunctuation = ['.',",","'",'!','?'];

const lessCommonPunctuation = ['-',':',';','&','$','#','@'];

const characters = [' ', ...numbers, ...letters,, ...commonPunctuation, ...lessCommonPunctuation];

interface CharacterCyclerProps {
  stopCharacter: string;
}

function CharacterCycler({ stopCharacter, quote }: LetterCyclerProps) {
  const [character, setCharacter] = useState(' ');

  function counter(minimum: number, maximum: string) {
    for (let i = 0; i <= characters.indexOf(maximum); i++) {
      setTimeout(() => {
        setCharacter(characters[i]);
        // multiplying * i forces re-render at even intervals
      }, 125 * i);
    }
  }

  // run on initial component render only
  useEffect(() => {
    const timeout = counter(0, stopCharacter);

    return function() {
      clearTimeout(timeout);
    }
  }, [quote]);

  return <span className="text-4xl font-split-flap text-custom-blue">{character}</span>;
}

export default CharacterCycler;
