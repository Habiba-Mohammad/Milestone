import"./Hero.css"
import Assessment from "../../images/mainImage/header.jfif" 
import HearingAid from "../../images/mainImage/HearingAid.png"
import Playing from "../../images/mainImage/Premium Vector _ Happy cute little kid boy and girl play jigsaw puzzle.jfif" 
import { Link } from "react-router-dom"
export default function Hero(){
    return(<>
    <div className="container mainHero">
    <div className="mainHero  row ">
    <div className="contentHero  col-5"> 
    <Link className="Herolink" to={'/Arabic'}>
    <h3 className="subTitleHero"> تقييم تطور طفلك</h3>

         <img className="childImage  " src={Assessment}alt="صورة طفل"/> 

 <p>يمكنك الإطمئنان على تطور طفلك من هنا <br/>
 بداية من عمر يوم حتى خمس سنوات 
 <br/></p>
 اضغط هنا </Link> 
 </div>

 {/*   <ul>
        <li>التغذية والتي تشمل
            <ul>
            <li>المهارات  الفمية الحركية </li>
            <li>التغذية </li>
            <li>العناصر الغذائية المقدمة للطفل </li>
            </ul>
        </li>
        <li> التفاعل الاجتماعي</li>
        <li> التواصل واللغة </li>
        <li> الإدراك </li>
        <li> الحركة </li>

    </ul> */}
    
    <div className="contentHero col-5"> 
    <Link  className="Herolink" to={'/listen'}>
    <h3 className="subTitleHero  "> اسمع</h3>

<img className="childImage  " src={HearingAid} alt="سماعة "/>
<p>يمكنك تطوير مهارات طفلك السمعية من خلال الإستماع لأصوات مختلفة ,<br/>
</p>
 اضغط هنا </Link>

</div>
<div className="contentHero  col-5">
<Link className="Herolink" to={'/listen'}> 
<h3 className="subTitleHero "> العاب</h3>

<img className="childImage  " src={Playing} alt="سماعة "/>
<p>العاب تنمي مهارات طفلك (السمعية والبصرية )<br/></p>
 اضغط هنا </Link>

</div>
</div>
</div>
    </>)
}