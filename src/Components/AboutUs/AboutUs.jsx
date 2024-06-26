import"./AboutUs.css"
import doctor from "../../images/doctor-write (1).gif"
import teamImg1 from"../../images/team-1.jpg"
import teamImg2 from"../../images/team-2.jpg"

const AboutUs = () => {
  return (
    <>
    <div className='mainAbout'>
<h1 className='about-title'> من نحن ؟ </h1>
<p className='about-us-info'>   نحن فريق من أخصائيين النطق واللغة ومطورين المواقع ومطورين تطبيقات الهاتف .</p>
<h2> رؤيتنا </h2>
<p className="about-us-info">نحن نسعى لتوفير موقع يساعد الآباء والأمهات على متابعة نمو أطفالهم بشكل طبيعي وصحي في بيئة آمنة وموثوقة .
<br></br>
نحن نؤمن بأن كل طفل يستحق أفضل الرعاية
 والمتابعة لذلك نعمل على توفير أحدث التقنيات والأدوات التي تساعد الآباء والأمهات على تحديد احتياجات طفلهم وتلبيتها بشكل أفضل. 
 <br></br>
    نحن نسعى لتحقيق رؤية صحية وسعيدة لكل طفل و ندعوكم للانضمام إلى مجتمعنا لتحقيق هذا الهدف معاَ .
 </p>
 <h2> مصادرنا </h2>
 <p>نعتمد على الترجمة من مصادر موثوقة مثل الجمعية الأمريكية للنطق واللغة و مركز مكافحة الأمراض والوقاية منها </p>
 <h2> نرحب بمساعدتك </h2>
 <p>يمكنك مساعدتنا عن طريق نشر موقعنا الإلكتروني من خلال هذا الرابط :<a href="https://habiba-mohammad.github.io/Milestone/#/"> طفلي  </a></p>
 <h2> يمكنك تحميل التطبيق الخاص بنا</h2>
 <p>يمكنك تحميل تطبيق طفلي واستخدامه بدون الإتصال بالأنترنت من خلال هذا الرابط :
 <a href="https://play.google.com/store/apps/details?id=com.mychild.milestones"> طفلي  </a>
    </p>
 </div>
 <img className='doctor' src={doctor} alt="doctor"/>

    </>
  )
}

export default AboutUs
