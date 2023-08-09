import React from 'react'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
        <div className='logo'>
            <img src='https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png' alt='logo' />
        </div>
        <ul>
            <li>Over-view</li>
            <li>Opportunity</li>
        </ul>
    </div>
  )
}

export default Navbar