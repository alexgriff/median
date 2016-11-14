import React from 'react';
import Paragraph from './paragraph'



export default ({text}) => {
  let paragraphs = text.split("\n").map( (p, i) => {
    return <Paragraph key={i} id={i} text={p} />
  })

  return(
    <div>
      {paragraphs}
    </div>
  );
}
