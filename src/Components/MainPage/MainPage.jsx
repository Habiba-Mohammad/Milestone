import React from 'react'
import "./MainPage.css"
import {Link, Route,Routes} from "react-router-dom"
function MainPage() {
  return (<>
    <div className='mainCont'>
<h2 className='question'> كم عمر طفلك ؟</h2>
{/* <ul>
<li> من عمر يوم حتى شهرين</li>
<li> من شهرين حتى أربعة أشهر </li>
<li>من أربعة أشهر حتى ستة أشهر </li>
<li>من ستة أشهر حتى تسعة أشهر </li>
<li> من تسعة أشهر حتى عام  </li>
<li>من عمر عام حتى عام وثلاثة أشهر </li>
<li>من عمر عام وثلاثة أشهر حتى عام ونصف</li>
<li>  من عمر عام ونصف حتى عامين </li>
<li>من عمر عامين حتى عامين ونصف</li>
<li>من عامين ونصف حتى ثلاثة أعوام </li>
<li>من ثلاثة أعوام حتى أربعة أعوام </li>
<li>من أربعة أعوام حتى خمس أعوام </li>
<li>أكبر من خمسة أعوام </li>

</ul> */}


<ul className='chooseStage'>
<Link className='link' to="/stage1"> 0-2 أشهر </Link>
<Link className='link'to="/stage2"> 2-4 أشهر </Link>
<Link className='link'to="/stage3"> 4-6 أشهر </Link>
<Link className='link'to="/stage4"> 6-9 أشهر </Link>
<Link className='link'to="/stage5"> 9-12 أشهر </Link>
 <Link className='link' to="/stage6">12-15 شهر  ( عام حتى عام وثلاثة أشهر )</Link>
<Link className='link'to="/stage7"> 15-18 شهر  ( عام وثلاثة أشهر  حتى عام ونصف  )</Link>
<Link className='link' to="/stage8">18-24 شهر (عام ونصف حتى عامين )</Link>
<Link className='link' to="/stage9"> 24-30 شهر (عامين حتى عامين ونصف )</Link> 
<Link className='link' to="/stage10"> 30-36 (عامين ونصف حتى ثلاثة أعوام ) </Link>
<Link className='link'to="/stage11"> 3-4 سنوات </Link>
<Link className='link'to="/stage12"> 4-5 سنوات </Link>
<Link className='link'to="/stage12"> أكبر من خمس سنوات </Link>
</ul>

</div>
</>
  )
}

export default MainPage