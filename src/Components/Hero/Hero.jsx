import"./Hero.css"
// import image from "../../../public/images/header.png" 
export default function Hero(){
    return(<>
    <div className="mainHero">
         <img className="image" src={image}alt="صورة طفل"/> 
    <div className="contentHero"> 
    
    <h3 className="subTitleHero"> تقييم تطور طفلك</h3>

    <p>نحن هنا لنساعدك للإطمئنان على نمو طفلك في عدة مستويات  </p>
        <ul>
            <li>التغذية والتي تشمل </li>
            <li> التفاعل الإجتماعي</li>
            <li> التواصل واللغة </li>
            <li> الإدراك </li>
            <li> الحركة </li>

        </ul>
    </div>
    </div>
    </>)
}
