import"./Hero.css"
import Assessment from "../../images/mainImage/header.jfif" 
import HearingAid from "../../images/mainImage/HearingAid.jfif"
import Playing from "../../images/mainImage/4e2bfff9-b125-4490-a301-c3600924ac59.jfif" 
import { Link } from "react-router-dom"
export default function Hero(){
    return(<>
    <div className="container ">
    <div className="mainHero   ">
    <div className="contentHero col-4  "> 
    <Link className="Herolink" to={'/Arabic'}>
    <h3 className="subTitleHero"> تقييم تطور طفلك</h3>

         <img className="childImage w-75  " src={Assessment}alt="صورة طفل"/> 

 <p>يمكنك الإطمئنان على تطور طفلك من هنا <br/>
 بداية من عمر يوم حتى خمس سنوات 
 <br/></p>
 اضغط هنا </Link> 
 </div>


    
    <div className="contentHero col-4"> 
    <Link  className="Herolink" to={'/listen'}>
    <h3 className="subTitleHero "> اسمع</h3>

<img className="childImage w-75 " src={HearingAid} alt="سماعة "/>
<p>يمكنك تطوير مهارات طفلك السمعية  <br/>من خلال الإستماع لأصوات مختلفة <br/>
</p>
 اضغط هنا </Link>

</div>
<div className="contentHero  col-4">
<Link className="Herolink" to={'/GamesMainPage'}> 
<h3 className="subTitleHero  "> العاب</h3>

<img className="childImage w-75 " src={Playing} alt="سماعة "/>
<p>العاب تنمي مهارات طفلك (السمعية والبصرية )<br/></p>
 اضغط هنا </Link>

</div>
</div>
</div>
    </>)
}
