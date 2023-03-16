import React from 'react'
import doctor from "../../images/doctor-write (1).gif"
const Articles = () => {
  return (
<>
<div className='article-container'>
<h1 className='article-title'>ما هي إضطرابات الكلام </h1>
<p> تنقسم إضرابات النطق واللغة إلى ثلاثة أقسام وتشمل </p>
  <ul>
    <li>
        
         إضطرابات نطق لها أشكال عديدة منها  عندما ينطق طفك حرف مكان حرف آخر مثل الراء تكون ياء "كرسي - كيسي "أو  يحذف بعض الحروف من الكلمة مثلب"بطاطس - طاطس"</li>
    <li>إضطراب الطلاقة ويشمل التلعثم و سرعة الكلام  </li>
    <li>إضطراب اللغة ويشمل إضطراب في فهم اللغة أو استخدامها </li>
    <li> </li>
    
    </ul>

</div>
<img className='doctor' src={doctor} alt="doctor"/>

</>
  )
}

export default Articles