import { useState } from "react"
import { selectGame } from "../../Data"
import ReactAudioPlayer from "react-audio-player"
const Choose = () => {
  let [score1,setScore1]=useState(0)
  let [smScore1,setSmScore1]=useState(0)
  let [smScore2,setSmScore2]=useState(0)
  let [smScore3,setSmScore3]=useState(0)


  return (
<>
<div className="container w-75  p-3">
<div className="">اسمع واختار </div> 
<div> عدد إجاباتك الصحيحة {score1} </div>
  {selectGame.map((game,x)=>
  <>
  <div className=" row border w-100 p-3 m-2">

  <ReactAudioPlayer className="col-4"  src={game.voice}controls/>
  <form > 
 
  <div className="row  "> 
    <div className="col-3" type="button" onClick={function sel1 (){
      if (game.correct=== game.answers[1]){
        console.log('11111')
        setScore1(score1+1)
        setSmScore1(smScore1+1)

      }
    }} >
    <img  src={game.answers[1]}  className="w-75 h-50 m-4 rounded-top hover"/> 
    </div>
    <div type="button" className='col-3' onClick={function sel1 (){
      if (game.correct=== game.answers[2]){
        console.log('2222')
        setScore1(score1+1)
        setSmScore2(smScore2+1)

      }
    }} value={2}>
    <img  src={game.answers[2]}  className="w-75 h-50 m-4 rounded-top"/> 
    </div>
    <div type="button" className='col-3' onClick={function sel1 (){
      if (game.correct=== game.answers[3]){
        setScore1(score1+1)
        setSmScore3(smScore3+1)

      }
    }} value={2}>
    <img  src={game.answers[3]}  className="w-75 m-4 h-50 rounded-top"/> 
    <div> hhh {smScore1}</div>
    </div>
  </div>
</form>
</div>

</>

  )}
  </div>
 

</>    
  )
}

export default Choose