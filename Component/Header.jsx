import React from 'react'

const  Header = () => {
  return (
    <>
    <div className="header-container">
   <div className="header">
  <nav>
    <div className="logo">
      <a>Vaishali <span>Jain</span></a>
    </div>
    <input type="checkbox" id="menu-toggle" />
    <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
    <ul className="menu">
      <li><a href="#">About</a></li>
      <li><a href="#">Achievements </a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div>
</div>
    </>
  )
}

export default Header
