import "./Nav.css"
import { Link, Router } from 'react-router-dom'
const Nav = () => {
  return (
<>

<nav className='Nav-bar'>
<input id="menu-toggle" type="checkbox" />
<label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
  
<div className='logo'>
  <p className='logoName'> طفلي</p>
  <i className='iconName'></i>
</div>
           <ul className='menu'>

             <li> <Link className="link"to="/Main" >الصفحة الرئيسية </Link></li>
             <li><Link className="link" to='/listen'>اسمع</Link></li>
            <li><Link className="link" to='/GamesMainPage'>العاب</Link></li>
              {/* <Link className="link" to="/login">تسجيل الدخول</Link> */}
              <li> <Link className="link" to='/Arabic'>عربي</Link></li>

             <li> <Link className="link" to='/English'>English</Link></li>
              {/* <li><Link className="link" to="/about">تعرف علينا </Link></li> */}
              <li> <Link className="link" to="/qs">مقالات أخرى </Link></li>
            {/* <li> <Link className="link" to="/article">أسئلة شائعة </Link></li>
             <li> <Link className="link" to="/help">تحتاج إلى مساعدة </Link></li> */}

          </ul>

</nav>


</>
  )
}

export default Nav