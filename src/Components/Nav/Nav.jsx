import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
<>

<nav className='Nav-bar'>
<input id="menu-toggle" type="checkbox" />
<label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
           <ul className='menu'>
          
             <li> <Link className="link"to="/">الصفحة الرئيسية </Link></li>
              {/* <Link className="link" to="/login">تسجيل الدخول</Link> */}

             <li> <Link className="link" to="/English">English</Link></li>
              <li><Link className="link" to="/about">تعرف علينا </Link></li>
            <li> <Link className="link" to="/article">مقالات أخرى </Link></li>
             <li> <Link className="link" to="/help">تحتاج إلى مساعدة </Link></li>

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