import React from 'react'
import "./MainPage.css"
import {BrowserRouter, Link, Route,Router,Routes} from "react-router-dom"
import doctor from "../../images/doctor-write (1).gif"
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
<Link className='link' to="/stage1"> من الولادة حتى شهرين </Link>
<Link className='link'to="/stage2"> من  عمر شهرين حتى أربعة أشهر </Link>
<Link className='link'to="/stage3"> من عمر أربعة أشهر حتى ستة أشهر </Link>
<Link className='link'to="/stage4"> من عمر ستة أشهر حتى تسعة أشهر </Link>
<Link className='link'to="/stage5"> من عمر تسعة أشهر حتى عام</Link>
 <Link className='link' to="/stage6">  من عمر عام حتى عام وثلاثة أشهر </Link>
<Link className='link'to="/stage7">  من عمر عام وثلاثة أشهر  حتى عام ونصف</Link>
<Link className='link' to="/stage8">من عمر عام ونصف حتى عامين </Link>
<Link className='link' to="/stage9"> من عمر عامين حتى عامين ونصف </Link> 
<Link className='link' to="/stage10">من عمر عامين ونصف حتى ثلاثة أعوام  </Link>
<Link className='link'to="/stage11"> من عمر ثلاث أعوام حتى أربعة أعوام </Link>
<Link className='link'to="/stage12"> من عمر أربعة أعوام حتى خمسة أعوام </Link>
<Link className='link'to="/stage12"> أكبر من خمس سنوات </Link>
</ul>

</div>
<img className='doctor' src={doctor} alt="doctor"/>

</>
  )
}

export default MainPage