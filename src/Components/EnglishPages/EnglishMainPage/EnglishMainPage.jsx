import React from 'react'
import "./EnglishMainPage.css"
import { Link } from 'react-router-dom'
import doctor from "../../../images/doctor-write (1).gif"
const EnglishMainPage = () => {
  return (
    <>
    <div className='english-main-cont'>
<h2 className='question'> How old is your child ?</h2>
<ul className='chooseStage'>
<Link  className='link' to="/stageEnglish1"> 0-2 month</Link>
<Link className='link'to="/stageEnglish2"> 2-4  month</Link>
<Link className='link'to="/stageEnglish3"> 4-6  month</Link>
<Link className='link'to="/stageEnglish4"> 6-9  month</Link>
<Link className='link'to="/stageEnglish5"> 9-12 month </Link>
<Link className='link'to="/stageEnglish6">12-15 month </Link>
<Link className='link'to="/stageEnglish7"> 15-18 month </Link>
<Link className='link' to="/stageEnglish8">18-24 month</Link>
<Link className='link' to="/stageEnglish9"> 24-30 month </Link> 
<Link className='link' to="/stageEnglish10"> 30-36 month  </Link>
<Link className='link'to="/stageEnglish11"> 3-4 years </Link>
<Link className='link'to="/stageEnglish12"> 4-5 years </Link>
<Link className='link'to="/stageEnglish12"> more than five years </Link>
</ul>

</div>
<img className='doctorEnglish' src={doctor} alt="doctor"/>

</>
  )
}  

export default EnglishMainPage