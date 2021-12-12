import React from 'react';

function DisplayQuote({ quote }) {
  return (
    quote && (
      <div className='DisplayQuote'>
              <h2>{quote.quote}</h2>
              <h2>{quote.character}</h2>
              <img src={quote.image} alt={quote.character}/>
      </div>
    )
  );
}

export default DisplayQuote;