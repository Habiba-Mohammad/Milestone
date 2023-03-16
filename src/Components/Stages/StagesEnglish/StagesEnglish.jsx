import {React,useState} from "react"
import boyandgirl from "../../../images/kids-gd7dbbc518_640.png"

import babyfeeding from "../../../images/funny-g797f45e5a_1280.png"
import movement from "../../../images/kids-g436434c66_1920-removebg-preview.png"
import language from "../../../images/boyAndGirlLanguage.png"
import cognition from "../../../images/cognition-removebg-preview.png"
import "./StagesEnglish.css"
export default function StagesEnglish(props){
  const [isChecked, setIsSubscribed] = useState(true)
  const[feedingScore,addFeedingScore]=useState(0)
  const[languageScore,addLanguageScore]=useState(0)
  const[socialScore,addSocialScore]=useState(0)
  const[cognitiveScore,addCognitiveScore]=useState(0)
  const[movementScore,addMovementScore]=useState(0)
  const total=movementScore+socialScore+languageScore+feedingScore+cognitiveScore
  const totalLength=props.feeding.length+props.language.length+props.movement.length+props.cognition.length+props.social.length
  const handleChangeFeeding = event => {
    event.target.checked=== true? addFeedingScore(feedingScore+1):addFeedingScore(feedingScore-1)

    setIsSubscribed(current => !current);
  };
  const handleChangeLanguage = event => {
    event.target.checked=== true? addLanguageScore(languageScore+1):addLanguageScore(languageScore-1)

    setIsSubscribed(current => !current);
  };

  const handleChangeSocial = event => {
    event.target.checked=== true? addSocialScore(socialScore+1):addSocialScore(socialScore-1)
    setIsSubscribed(current => !current);
  };


  const handleChangeCognitive = event => {
    event.target.checked=== true? addCognitiveScore(cognitiveScore+1):addCognitiveScore(cognitiveScore-1)
    setIsSubscribed(current => !current);
  };

  const handleChangeMovement = event => {
    event.target.checked=== true? addMovementScore(movementScore+1):addMovementScore(movementScore-1)
    setIsSubscribed(current => !current);
  };
  return(
  <div>
 <div className="stagesEnglish">

<div className="feeding"> 
<img className="baby-feeding" src={babyfeeding}/>

 <h1 >{props.title} </h1>
<h2> {props.feedingTitle}</h2>
{props.feeding.map(feeding=>{
  let num =0

        return(<>
        
        <div className="form-check">
        <label className="form-check-label" htmlFor={`feedingCheck${num+1}`}>
           {feeding}
          </label>
          <input className="form-check-input" type="checkbox" value={isChecked}  onChange={handleChangeFeeding} id={`feedingCheck`}/>
        </div>
        
  </>)})}

    <div className="degree">   The baby appears to look like his peers in nutrition at {(feedingScore/props.feeding.length*100).toFixed(2)} </div>

</div>


    <div className="language">
    <img className="boy-girl-language" src={language}/>

      <h2> {props.languageTitle}</h2>
{props.language.map(language=>{
        return(  
        <div className="form-check">
        <label className="form-check-label" htmlFor="languageCheck">
           {language}
          </label>
        <input className="form-check-input" type="checkbox" value={isChecked} onChange={handleChangeLanguage} id="languageCheck"/>

        </div>
        )
      })}
    <div className="degree">  The baby appears to look like his peers in communication and language at{(languageScore/props.language.length*100).toFixed(2)}%</div>

      </div>
      <div className="cognition">  

      <img className="boy-girl-cognition" src={cognition}/>

      <h2> {props.cognitionTitle}</h2>
{props.cognition.map(cognition=>{
        return(

        <div className="form-check">
        <label className="form-check-label" htmlFor="cognitionCheck">
           {cognition}
          </label>
          <input className="form-check-input" type="checkbox" value={isChecked} onChange={handleChangeCognitive} id="cognitionCheck"/>

        </div>
  

        )
      })
      }
 <div className="degree">  The baby appears to look like his peers in cognition at{(cognitiveScore/props.cognition.length * 100).toFixed(2)}</div>
            </div>
      <div className="social"> 
      <img className="social-boy-girl" src={boyandgirl}/>
      <h2> {props.socialTitle}</h2>
{props.social.map(social=>{
        return( 
        <div className="form-check">
        <label className="form-check-label" htmlFor="socialCheck">
           {social}
          </label>
          <input className="form-check-input" type="checkbox" value={isChecked} onChange={handleChangeSocial} id="socialCheck"/>

        </div>
        )
      })}
      <div className="degree">  The baby appears to look like his peers in social at{(socialScore/props.social.length*100).toFixed(2)}</div>
      </div>
      <div className="movement">
      <img className="movement-boy-girl" src={movement}/>

      <h2> {props.movementTitle}</h2>
{props.movement.map(movement=>{
        return( 
        <div className="form-check">
        <label className="form-check-label" htmlFor="movementCheck">
           {movement}
          </label>
          <input className="form-check-input" type="checkbox" value={isChecked} onChange={handleChangeMovement} id="movementCheck"/>

        </div>
        )
      })} 
<div className="degree">  The baby appears to look like his peers in movement at{(movementScore/props.movement.length*100).toFixed(0)}%</div>
</div>


<div className="degree">  Total degree of your child is {(total/totalLength*100).toFixed(0)}%</div>
 </div>
 </div>) 
}
