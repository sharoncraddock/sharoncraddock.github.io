import '../split-flap/split-flap.scss';
import CharacterCycler from './character-cycler';
import quotes from './quotes';
import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

interface SplitFlapTableProps {
  voiceClass: string;
}

function SplitFlapTable({ voiceClass }: SplitFlapTableProps){

  const rowLength = isMobile ? 10 : 20;
  const [quote, setQuote] = useState('It is never too late to be what you might have been.');

  // selects a single quote from the array of quotes
  function selectedQuote(quoteArray: Array<string>){
    // remove previous quote from array so it won't be duplicated
    const previousQuoteIndex = quoteArray.findIndex((item) => item === quote);
    if (previousQuoteIndex >= 0) {
      quoteArray.splice(previousQuoteIndex, 1);
    }
    if (!quoteArray.length) {
      return 'You\'ve seen all the quotes I have for now!';
    } else {
      return quoteArray[Math.floor(Math.random() * quoteArray.length)];
    }
  }

  // splits quote into individual rows and returns an array of those rows
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
            quoteRowsArray.push(line.trim());
            line = '';
            break;
          }
        }
        // line that was too short to trigger push
        if (line.length) {
          quoteRowsArray.push(line.trim());
        }
      }
      return quoteRowsArray;
  }

  // uppercase each individual character and pass it to the Cycler
  function tableData(item: Array<string>) {
    const itemIndividualChars = [...item.toUpperCase()];
    return itemIndividualChars.map((char, index) => 
      <td key={`${index}-${char}`} className="bg-slate-300 border border-custom-blue text-center td-width">
        <CharacterCycler stopCharacter={char} quote={quote} />
      </td>);
  }
  
  function tableRows(quote: Array<string>){
    if (!quote) return [];
    return (
      <>
       {quote.map(
        (item: string, index: number) => 
          <tr key={`${index}-${item.charAt(0)}`} className="border border-custom-blue">
            {tableData(item.padEnd(rowLength - 1, ' '))}
          </tr>
       )}
      </>
    );
  }

  function handleClick(){
    setQuote(selectedQuote(quotes));
  }

  function completedQuote(quote: string){
   const quoteReadyForTable = quoteInRows(quote, rowLength);
   const tableReadyQuote = tableRows(quoteReadyForTable);
   return tableReadyQuote;
  }

  return (
    <>
      <p className="text-base font-sans text-slate-400">
        Split-flap displays (sometimes referred to as Solari boards, after the original inventor) are considered retro or nostalgic these days, but in the pre-digital age, they were commonly used in airports and train stations to display arrival and departure times. Rows are comprised of individual characters containing a circular collection of flaps, which rotate in unison through a sequence of numbers and letters and stop on the desired character. The rotating flaps create a distinct sound that attracts attention when the information updates.
      </p>
      <p className="text-white mt-6">Need some inspiration? Click the button to display a new quote.</p>
        <button onClick={handleClick} className={`border border-${voiceClass} rounded hover:bg-slate-400 bg-white text-xs text-custom-blue uppercase mt-4 mb-4`}>New Quote</button>
      <div className="">
        <table className="border-collapse">
          <tbody>
            {completedQuote(quote)}
          </tbody>
        </table>
      </div>
     </>
  )
}

export default SplitFlapTable;