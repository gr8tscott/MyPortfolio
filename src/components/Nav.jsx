import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className="navbar">
      {/* <h4>kill me

      </h4> */}
      <div>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="portfolio">Portfolio</Link>
      </div>
    </nav>
  )
}

export default Nav