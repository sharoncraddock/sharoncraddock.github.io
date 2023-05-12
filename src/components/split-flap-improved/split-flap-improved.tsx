
import quotes from '../../components/split-flap/quotes';
import { useState } from 'react';
import QuoteTable from './quote-table';

const inspirationalQuotes = [...quotes];

function SplitFlapImproved(){

  const [quote, setQuote] = useState('It is never too late to be what you might have been.');

  function selectedQuote(quoteArray: Array<string>){
    // remove previously shown quote from array so it won't be duplicated
    const previousQuoteIndex = quoteArray.findIndex((item) => item === quote);
    if (previousQuoteIndex >= 0) {
      quoteArray.splice(previousQuoteIndex, 1);
    }
    if (!quoteArray.length) {
      return 'You\'ve seen all the quotes I have for now!';
    } else {
      // select a new quote to display
      return quoteArray[Math.floor(Math.random() * quoteArray.length)];
    }
  }

  function handleClick(){
    const newQuote = selectedQuote(inspirationalQuotes);
    setQuote(newQuote);
  }

  return (
    <>
      <button onClick={handleClick} className="border rounded hover:bg-slate-400 bg-white text-xs text-custom-blue uppercase mt-4 mb-4">New Quote</button>
      <QuoteTable quote={quote} />
    </>
  )
}

export default SplitFlapImproved;