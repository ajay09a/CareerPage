import React from 'react'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footer}>
            <div>
                <img src='' alt='logo' />
                <p>Aubotz Labs Pvt Ltd</p>
                <div>
                    <img src='' alt='location' />
                    <p>Survey No 116, 3/1, opp. Shubh Tej Mangal
                        karyalay, near Balaji Chowk, Jai Bhavani
                        Nagar, Pashan, Pune Maharashtra 411021
                    </p>
                </div>
                <div>
                    <img src='' alt='mail' />
                    <a href='mailto:xyz@gmail.com'>xyz@gmail.com</a>
                </div>
            </div>
            <div className={styles.recentPost}>
                <h3>Recent Posts</h3>
                <ul>
                    <li>Evevating Efficiency: Evolution of Material Handling with AMRs</li>
                    <li>Autonomous Mobile Robots: The Future of Efficient Material Handing</li>
                    <li>Robotic Floor Scrubbers- The Future of Autonomous Cleaning at Airports</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <div className={styles.end}>
            <p>getpeppermint © 2023. All rights reserved.</p>
            <ul>
                <li>
                    <img src='https://seeklogo.com/images/T/twitter-x-logo-101C7D2420-seeklogo.com.png?v=638258000500000000' alt='x' />
                </li>
                <li>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11vN6ovFabIO4qFptL1s4ODnANrpmcLUmdpXwO8oxlim_u70tIcLlTkD8qCSHErNRtsQ&usqp=CAU' alt='Youtube' />
                </li>
                <li>
                    <img src='https://w7.pngwing.com/pngs/402/997/png-transparent-linkedin-logo-computer-icons-facebook-user-profile-facebook-blue-angle-text.png' alt='LinkedIn' />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer