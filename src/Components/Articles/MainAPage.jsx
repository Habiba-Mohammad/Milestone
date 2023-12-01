import React from 'react'
import { Link } from 'react-router-dom'
import "./Articles.css"
const MainAPage = () => {
  return (
<>
<div className='A-container'>

<h1> مقالات متنوعة</h1>
<li><Link className='A-link' to='/Art1'>  أهمية مراحل نمو وتطور الأطفال و فحوصات للأطفال.</Link></li>
<li><Link className='A-link' to='/Art2'>ما هي مهارات ما قبل اللغة وأهميتها.</Link></li>
</div>

</>  )
}

export default MainAPage