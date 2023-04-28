import '../split-flap/split-flap.scss';
import CharacterCycler from './character-cycler';
import quotes from './quotes';
import { useState, useEffect } from 'react';
import { isDesktop } from 'react-device-detect';

const rowLength = isDesktop ? 20 : 14;

function SplitFlapTable(){

  const [message, setMessage] = useState('Whatever you are, be a good one.');
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
      <td className="bg-slate-400 border border-custom-blue text-center td-width">
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
      <div className="">
        <p className="text-white">Need some inspiration? Click to display a new quote.</p>
          <button onClick={handleClick} className="">New Quote</button>
      </div>
      <div className="">
        {table}
      </div>
     </>
  )
}

export default SplitFlapTable;