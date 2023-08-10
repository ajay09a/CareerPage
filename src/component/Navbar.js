import React from 'react'
import styles from '../styles/navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
        <div className='logo'>
            <NavLink to="/home"><img src='https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png' alt='logo' /></NavLink>
        </div>
        <ul>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/">Career</NavLink>
        </ul>
    </div>
  )
}

export default Navbar