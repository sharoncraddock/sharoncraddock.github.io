import { useState, useEffect } from 'react';
import CharacterCyclerImproved from './character-cycler-improved';


function QuoteTable({quote}){

  // temp for desktop
  const rowLength = 20;

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

  const quoteForTable = quoteInRows(quote, rowLength);

  // const maxRows = rowLength === 20 ? 5 : 10;
  // temp for desktop
  const maxRows = 5;

  function tableRows(quote: Array<string>){
    if (!quote) return [];
    while (quote.length < 5) {
      quote.push(''.padEnd(rowLength - 2));
    }
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

  function tableData(item: Array<string>) {
    const itemIndividualChars = [...item.toUpperCase()];
    return itemIndividualChars.map((char, index) => 
      <td key={`${index}-${char}`} className="bg-slate-300 border border-custom-blue text-center td-width text-4xl font-split-flap text-custom-blue">
        <CharacterCyclerImproved stopCharacter={char} />
      </td>);
  }

  const tableRowElements = tableRows(quoteForTable);

  return (
    <>
      <table className="border-collapse">
        <tbody>
          {tableRowElements}
        </tbody>
      </table>
    </>
  )
}

export default QuoteTable;