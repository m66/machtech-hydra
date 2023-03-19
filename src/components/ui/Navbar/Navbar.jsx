import React from 'react'
import { Link } from 'react-router-dom'

import styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/technologies">TECHNOLOGIES</Link>
          </li>
          <li>
            <Link to="/how-to">HOW TO</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar