import"./AboutUs.css"
import teamImg1 from"../../images/team-1.jpg"
import teamImg2 from"../../images/team-2.jpg"

const AboutUs = () => {
  return (
    <>
    <div className='mainAbout'>
<h1 className='about-title'> من نحن ؟ </h1>
<p className='about-us-info'>   نحن فريق من أخصائيين النطق واللغة ومطورين المواقع ومطورين تطبيقات الهاتف </p>
<h2 className='about-title'>التعرف أكثر على  فريق العمل </h2>

<div className='img-cont'>
  <div className='team-cont'> 
<img className="" src={teamImg1} alt=''/>
<h3> حبيبة محمد مصطفى </h3>
<p> أخصائية نطق ولغة ومطورة واجهة أمامية للمواقع الإلكتروني  </p>
</div>
<div className='team-cont2'>
<img className="" src={teamImg2} alt=''/>
</div>
</div>
 </div>
    </>
  )
}

export default AboutUs