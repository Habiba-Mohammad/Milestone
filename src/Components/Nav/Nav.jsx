import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
<>

<nav className='Nav-bar'>
           <ul>
          
              <Link className="link"to="/">الصفحة الرئيسية </Link>
              <Link className="link" to="/login">تسجيل الدخول</Link>

              <Link className="link" to="/English">English</Link>
              <Link className="link" to="/about">تعرف علينا </Link>
              <Link className="link" to="/article">مقالات أخرى </Link>
              <Link className="link" to="/help">تحتاج إلى مساعدة </Link>

          </ul>

<div className='logo'>
  <p className='logoName'> طفلي</p>
  <i className='iconName'></i>
</div>
</nav>


</>
  )
}

export default Nav