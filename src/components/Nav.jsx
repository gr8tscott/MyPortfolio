import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar header-container">
      <div>
        <a class="h1-container" href="/">
          <h1>Matthew Scott</h1>
        </a>
      </div>
      <div className="navLinks">
        {/* <div className="nav">
          <Link to="/">Home</Link>
        </div> */}
        <div className="nav">
          <Link to="about">About Me</Link>
        </div>
        <div className="nav">
          <Link to="portfolio">Projects</Link>
        </div>
        <div className="nav">
          <a
            className=""
            href="https://docs.google.com/document/d/1I9Ai_v705heBh9BX-_2KNBRWthvMAe8WEQxYj_dvEaY/edit?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
