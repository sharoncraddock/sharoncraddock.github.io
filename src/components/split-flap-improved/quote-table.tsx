import { useState, useEffect } from 'react';
import CharacterCyclerImproved from './character-cycler-improved';
import { isMobile } from 'react-device-detect';

const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const punctuation = ["'",'-','.',",", '!', '?'];

const characters = [' ', ...letters, ...punctuation];

function QuoteTable({quote}){

  const rowLength = isMobile ? 10 : 20;
  const maxRows = isMobile ? 10 : 5;

  function initialState(rowLength: number, maxRows: number) {
    let initialArray = [];
    for (let i = 0; i < maxRows; i++) {
      initialArray.push(Array(rowLength).fill(' '));
    }
    return initialArray;
  }

  const [currentState, setCurrentState] = useState(initialState(rowLength, maxRows));

  const [count, setCount] = useState(0);

  // splits quote into individual rows and returns an array of those rows
  // TODO: reject quotes when they contain a single word over 10 characters
  // or when adding the end space makes the row over 10 characters
  function quoteInRows(quote: string, rowLength: number){
    if (!quote) return [];
    let quoteRowsArray = [];
      const words = quote.split(' ');
      while (words.length) {
        let line = '';
        while (words.length) {
          const trialLine = line + words[0] + ' ';
          if (trialLine.trim().length < rowLength) {
            line = trialLine;
            words.shift();
          } else {
            quoteRowsArray.push(line.trim().toUpperCase());
            line = '';
            break;
          }
        }
        // line that was too short to trigger push
        if (line.length) {
          // TODO: convert to arrays here - needed for deep equality
          quoteRowsArray.push(line.trim().toUpperCase());
        }
      }
      return quoteRowsArray;
  }

  const quoteForTable = quoteInRows(quote, rowLength);

  function tableRows(quote: Array<string>){
    if (!quote) return [];
    return (
      <>
       {quote.map(
        (item: Array<string>, index: number) => 
          <tr className="border border-custom-blue">
            {tableData(item)}
          </tr>
       )}
      </>
    );
  }

  function advanceState(currentState: Array<string>, finalState: Array<string>){
    for (let row = 0; row < finalState.length; row++){
      for(let col = 0; col < finalState[row].length; col++) {
        if (currentState[row][col] !== finalState[row][col]) {
           const index = characters.indexOf(currentState[row][col]);
           currentState[row][col] = characters[(index + 1) % characters.length];
        }
      }
    }
    return currentState;
  }

  useEffect(() => {
    setCurrentState(initialState(rowLength, maxRows));
    const timeout = setInterval(() => {
      setCurrentState((prevState) => advanceState(prevState, quoteForTable))
      // temp workaround due to React shallow equality/invisible state updates in inner arrays
      setCount((prevCount) => prevCount + 1);
    }, 125);
    return () => {
      clearInterval(timeout);
    }
  }, [quote]);

  function tableData(item: Array<string>) {
    return item.map((char, index) => 
      <td className="bg-slate-300 border border-custom-blue text-center td-width text-4xl font-split-flap text-custom-blue">
        {char}
      </td>);
  }

  return (
    <>
      <table className="border-collapse">
        <tbody>
          {tableRows(currentState)}
        </tbody>
      </table>
    </>
  )
}

export default QuoteTable;