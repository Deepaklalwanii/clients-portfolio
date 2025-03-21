import React from 'react'

const  Header = () => {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
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
      <li><a onClick={() => handleScroll('about')}>About</a></li>
      <li><a onClick={() => handleScroll('achievements')}>Achievements </a></li>
      <li><a onClick={()=> handleScroll('contact')}>Contact</a></li>
    </ul>
  </nav>
</div>
</div>
    </>
  )
}

export default Header
