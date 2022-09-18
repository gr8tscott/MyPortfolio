import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      {/* <h4>kill me

      </h4> */}
      {/* <div className="navLinks"> */}
      <div className="nav">
        <Link to="/">Home</Link>
      </div>
      <div className="nav">
        <Link to="about">About Me</Link>
      </div>
      <div className="nav">
        <Link to="portfolio">Portfolio</Link>
      </div>
      <div className="nav">
        <a
          className=""
          href="https://docs.google.com/document/d/1I9Ai_v705heBh9BX-_2KNBRWthvMAe8WEQxYj_dvEaY/edit?usp=sharing"
        >
          Resume
        </a>
      </div>
      {/* </div> */}
    </nav>
  )
}

export default Nav
