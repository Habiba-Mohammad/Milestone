import React from 'react'
import "./SingleCard.css"
import questionMark from "../../../../../../images/Icons/questionMark.jfif"



const SingleCard = ({card,handleChoice,flipped,disabled}) => {
  const handleClick=()=>{
    if (!disabled){
    handleChoice(card)}
  }
  return (
<>
<div className='card m-2 ml-3 p-1 cardGame ' >
         <div className={flipped ?"flipped":""}> 
          
          <img onClick={handleClick} className="front w-100 h-100 row" src={card.src}/>
          <img  
          className="back  row"
           onClick={handleClick}
            alt="back of the card"
             src={questionMark}/>

          </div> 
          
           </div>
</>  )
}

export default SingleCard