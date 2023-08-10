import React from 'react'
import styles from '../styles/footer.module.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footer}>
            <div>
                <img className={styles.companyLogo} src='https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png' alt='logo' />
                <p>Aubotz Labs Pvt Ltd</p>
                <div className={styles.details}>
                    <img src='https://www.freeiconspng.com/thumbs/address-icon/address-icon-15.png' alt='location' />
                    <p>Survey No 116, 3/1, opp. Shubh Tej Mangal
                        karyalay, near Balaji Chowk, Jai Bhavani
                        Nagar, Pashan, Pune Maharashtra 411021
                    </p>
                </div>
                <div className={styles.details}>
                    <img src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png' alt='mail' />
                    <a href='mailto:xyz@gmail.com'>xyz@gmail.com</a>
                </div>
            </div>
            <div className={styles.recentPost}>
                <h3>Recent Posts</h3>
                <ul>
                    <li><NavLink to="/post">Evevating Efficiency: Evolution of Material Handling with AMRs</NavLink></li>
                    <li><NavLink to="/post">Autonomous Mobile Robots: The Future of Efficient Material Handing</NavLink></li>
                    <li><NavLink to="/post">Robotic Floor Scrubbers- The Future of Autonomous Cleaning at Airports</NavLink></li>
                </ul>
            </div>
            
        </div>
        <hr />
        <div className={styles.end}>
            <p>getpeppermint © 2023. All rights reserved.</p>
            <ul>
                <li>
                    <a href='https://twitter.com/i/flow/login'><img src='https://seeklogo.com/images/T/twitter-x-logo-101C7D2420-seeklogo.com.png?v=638258000500000000' alt='x' /></a>
                </li>
                <li>
                    <a href='https://www.youtube.com'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11vN6ovFabIO4qFptL1s4ODnANrpmcLUmdpXwO8oxlim_u70tIcLlTkD8qCSHErNRtsQ&usqp=CAU' alt='Youtube' /></a>
                </li>
                <li>
                <a href='https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F'><img src='https://w7.pngwing.com/pngs/402/997/png-transparent-linkedin-logo-computer-icons-facebook-user-profile-facebook-blue-angle-text.png' alt='LinkedIn' /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer