import React, { useEffect, useState } from 'react'
import src1 from'../../../images/Duck.jpg'
import src2 from'../../../images/cow.jpg'
import src3 from'../../../images/dog.jpg'
import src4 from'../../../images/sheep.jpg'
//transports6
import srcMotorcycle from'../../../images/transportationsImages/pexels-pixabay-163789.jpg'
import srccar from'../../../images/transportationsImages/car.jpg'
import srctrain from'../../../images/transportationsImages/train.jpg'
import srcambulance from'../../../images/transportationsImages/ambulance (1).jpg'
import srcPolice from'../../../images/transportationsImages/police.jpg'
import srcship from'../../../images/transportationsImages/ship.jpg'

//
import cat from "../../../audio/cat.wav"
import dog from "../../../audio/dog.wav"
import cow from "../../../audio/cow.wav"
import sheep from "../../../audio/goat.wav"
import "./Games.css"
// import src1 from '../../../audio/cat.wav'
// import src2 from '../../../audio/cat.wav'
// import src3 from '../../../audio/cat.wav'
// import src4 from'../../../audio/cat.wav'
import { ResetTv } from '@mui/icons-material'
import SingleCard from './SingleCard/SingleCard'
import Puzzle from './Puzzle/Puzzle'
const CardImages=[
  {'src':src1,matched:false},
  {'src':src2,matched:false},
  {'src':src3,matched:false},
  {'src':src4,matched:false},
]
const CardImages2=[
  {'src':srcMotorcycle,matched:false},
  {'src':srcPolice,matched:false},
  {'src':srcambulance,matched:false},
  {'src':srccar,matched:false},
  {'src':srcship,matched:false},
  {'src':srctrain,matched:false},
]
// const CardSound=[
//   {'src':cat,matched:false},
//   {'src':cow,matched:false},
//   {'src':dog,matched:false},
//   {'src':sheep,matched:false},
// ]
const Games = (card) => {
  const[cards,setCards]=useState([])
  const[turns,setTurns]=useState(0)
  const[choiceOne,setChoiceOne]=useState(null)
  const[choiceTwo,setChoiceTwo]=useState(null)
  const [disabled,setDisabled]=useState(false)
  const shuffleCards=()=>{
    const shuffledCards=[...CardImages,...CardImages]
    .sort(()=>Math.random()-0.5)
  .map((card)=>({...card,id:Math.random()}))

  setCards(shuffledCards)
setTurns(0)
}
const shuffleCards2=()=>{
  const shuffledCards=[...CardImages2,...CardImages2]
  .sort(()=>Math.random()-0.5)
.map((card)=>({...card,id:Math.random()}))

setCards(shuffledCards)
setTurns(0)
}
const handleChoice=(card)=>{
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}

useEffect(()=>{
if(choiceOne&&choiceTwo){
  setDisabled(true)

  if(choiceOne.src === choiceTwo.src ){
    console.log('Those Cards Match')

    setCards(prevCards=>{
      return prevCards.map(card =>{
        if (card.src === choiceOne.src){
          return {...card,matched:true}
        }
        else{
          return card 
        }
      })
    })

   resetTurn()}
   else{
   setTimeout(()=> resetTurn(),1000)
   }
  
}
},[choiceOne,choiceTwo])
console.log(cards)
const resetTurn=()=>{
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns=>prevTurns+1)
  setDisabled(false)
}
  return (
    <>
    <h1 >كيف حال ذاكرة طفلك البصرية  </h1>
    <h2>هيا بنا نبدأ اللعب </h2>
    <button onClick={shuffleCards} > هيا بنا </button>
    <button onClick={shuffleCards2} > hhhhهيا بنا </button>

    <div className='container Games-container'>
    <div className='flex row   '>
      {cards.map(card=>(
       <SingleCard 
       key={card.id} 
       card={card}
       handleChoice={handleChoice}
       flipped={card===choiceOne || card===choiceTwo || card.matched }
       disabled={disabled}
       />
      ))}
    </div>


    <p>Turns :{turns}</p>

    </div>
    </>
  )
}

export default Games