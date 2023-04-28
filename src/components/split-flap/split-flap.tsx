import '../split-flap/split-flap.scss';
import CharacterCycler from './character-cycler';
import quotes from './quotes';
import { useState, useEffect } from 'react';
import { isDesktop } from 'react-device-detect';

const rowLength = isDesktop ? 20 : 10;

interface SplitFlapTableProps {
  voiceClass: string;
}

function SplitFlapTable({ voiceClass }: SplitFlapTableProps){

  const [message, setMessage] = useState('');
  const [table, setTable] = useState(null);

  function selectedMessage(messageArray: Array<object>){
    return messageArray[Math.floor(Math.random() * messageArray.length)];
  }

  function messageRows(message: string, rowLength: number){
    if (!message) return;
    let finalArray = [];
      const words = message.split(' ');
      while (words.length) {
        let line = '';
        while (words.length) {
          const trialLine = line + words[0] + ' ';
          if (trialLine.trim().length < rowLength) {
            line = trialLine;
            words.shift();
          } else {
            finalArray.push(line.trim());
            line = '';
            break;
          }
        }
        // line that was too short to trigger push
        if (line.length) {
          finalArray.push(line.trim());
        }
      }
      return finalArray;
  }

  function tableData(item: Array<string>) {
    const itemIndividualChars = [...item.toUpperCase()];
    return itemIndividualChars.map((char) => 
      <td className="bg-slate-300 border border-custom-blue text-center td-width">
        <CharacterCycler stopCharacter={char} quote={message} />
      </td>);
  }
  
  function tableRows(quote: Array<string>){
    if (!quote) return;
    return (
      <table className="border-collapse">
        <tbody>
           {quote.map(
            (item: string) => <tr className="border border-custom-blue">{tableData(item.padEnd(rowLength - 1, ' '))}</tr>
           )}
        </tbody>
      </table>
      );
  }

  function handleClick(){
    const updatedMessage = selectedMessage(quotes);
    setMessage(updatedMessage.quote);
    setTable(finalTable(updatedMessage.quote));
  }

  function finalTable(messg: string){
   const messgInRows = messageRows(messg, rowLength);
   return tableRows(messgInRows);
  }

  return (
    <>
      <p className="text-base font-sans text-slate-400">
        Split-flap displays (sometimes referred to as Solari boards, after the original inventor) are considered retro or nostalgic these days, but in the pre-digital age, they were commonly used in airports and train stations to display arrival and departure times. Rows are comprised of individual characters containing a circular collection of flaps, which rotate in unison through a sequence of numbers and letters and stop on the desired character. The rotating flaps create a distinct sound that attracts attention when the information updates.
      </p>
      <p className="text-white mt-6">Need some inspiration? Click the button to display a new quote.</p>
        <button onClick={handleClick} className={`border border-${voiceClass} rounded hover:bg-slate-400 bg-white text-xs text-custom-blue uppercase mt-4 mb-4`}>New Quote</button>
      <div className="">
        {table}
      </div>
     </>
  )
}

export default SplitFlapTable;