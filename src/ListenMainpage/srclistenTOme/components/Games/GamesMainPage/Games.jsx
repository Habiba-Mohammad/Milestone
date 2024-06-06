import React, { useEffect, useState } from 'react'
//animals4
import src1 from'../../../../../images/AnimalsImages/Duck.jpg'
import src2 from'../../../../../images/AnimalsImages/cow.jpg'
import src3 from'../../../../../images/AnimalsImages/dog.jpg'
import src4 from'../../../../../images/AnimalsImages/sheep.jpg'
//transports6
import srcMotorcycle from'../../../../../images/transportationsImages/bike.jpg'
import srccar from'../../../../../images/transportationsImages/car.jpg'
import srctrain from'../../../../../images/transportationsImages/train.jpg'
import srcambulance from'../../../../../images/transportationsImages/ambulance (1).jpg'
import srcPolice from'../../../../../images/transportationsImages/police.jpg'
import srcship from'../../../../../images/transportationsImages/ship.jpg'
//Vegetables12
import srccucmber from'../../../../../images/vegetables/cucmber.jpg'
import srccabage from'../../../../../images/vegetables/cabage.jpg'
import srccarrot from'../../../../../images/vegetables/carrot.jpg'
import srcbamia from'../../../../../images/vegetables/bamia.jpg'
import srcbangar from'../../../../../images/vegetables/bangar.jpg'
import srcbeas from'../../../../../images/vegetables/beas.jpg'
import srccouliFlower from'../../../../../images/vegetables/couli-flower.jpg'
import srceggPlanet from'../../../../../images/vegetables/egg-planet.jpg'
import srconion from'../../../../../images/vegetables/onion.jpg'
import srccupotatos from'../../../../../images/vegetables/potatos.jpg'
import srctomato from'../../../../../images/vegetables/Tomato.jpg'
import srczuccini from'../../../../../images/vegetables/zuccini.jpg'
import one from "../../../../../images/Icons/1.jfif"
import two  from "../../../../../images/Icons/2.jfif"
import three from "../../../../../images/Icons/3.jfif"
//
// import cat from "../../../audio/cat.wav"
// import dog from "../../../audio/dog.wav"
// import cow from "../../../audio/cow.wav"
// import sheep from "../../../audio/goat.wav"
import "./Games.css"
// import src1 from '../../../audio/cat.wav'
// import src2 from '../../../audio/cat.wav'
// import src3 from '../../../audio/cat.wav'
// import src4 from'../../../audio/cat.wav'
import { ResetTv } from '@mui/icons-material'
import SingleCard from './SingleCard/SingleCard'
import Puzzle from './Puzzle/Puzzle'
import { Link } from 'react-router-dom'
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
const CardImages3=[
  {'src':srcbamia,matched:false},
  {'src':srcbangar,matched:false},
  {'src':srcbeas,matched:false},
  {'src':srccabage,matched:false},
  {'src':srccouliFlower,matched:false},
  {'src':srccarrot,matched:false},
  {'src':srccucmber,matched:false},
  {'src':srceggPlanet,matched:false},
  {'src':srccupotatos,matched:false},
  {'src':srconion,matched:false},
  {'src':srctomato,matched:false},
  {'src':srczuccini,matched:false},
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
const shuffleCards3=()=>{
  const shuffledCards=[...CardImages3,...CardImages3]
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
    <div className='MemoryGameCont row space-between m-4 d-flex'>
    <h1 className='text-center link  '>لعبة الذاكرة البصرية</h1>
    <div className='row m-3  p-3 justify-content-center d-flex'>

    <Link className='fs-4 w-25 text-center link' onClick={shuffleCards} >
      <img className='w-100' src={one} />
       المرحلة الأولى </Link>
    <Link className='fs-4 w-25 text-center link' onClick={shuffleCards2} > 
    <img className='w-100' src={two}/>
المرحلة الثانية</Link>
    <Link  className='fs-4 w-25 text-center link' onClick={shuffleCards3} >
    <img className='w-100' src={three}/>
 المرحلة الثالثة</Link>
    </div>
    </div>
    <div className='container Games-container'>
    <div className='flex row justify-content-center '>
    <h1 className='text-danger '>المحاولات:<span className=' border '>{turns}</span></h1>

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



    </div>
    </>
  )
}

export default Games