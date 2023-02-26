import React from 'react'
import "./EnglishNav.css"
import { Link } from 'react-router-dom'
const EnglishNav = () => {
  return (
<>
<nav className='Nav-bar-English'>
           <ul>
          
              <Link className="link"to="/">Main Page </Link>
              <Link className="link" to="/login">Login </Link>
              <Link className="link" to="/English">عربي</Link>
              <Link className="link" to="/about">Abou us</Link>
              <Link className="link" to="/article"> Articles</Link>
              <Link className="link" to="/help">Help me </Link>

          </ul>

<div className='logo'>
  <p className='logoName'> My Child</p>
  <i className='iconName'></i>
</div>
</nav>

</>  )
}

export default EnglishNav