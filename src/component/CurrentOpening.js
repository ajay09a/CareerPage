import React from 'react'
import styles from '../styles/opening.module.css'
import { data } from '../Data'

const CurrentOpening = () => {
  return (
    <div className={styles.openingContainer}>
        <h2>CurrentOpening</h2>
        <div className={styles.container}>
        {Object.keys(data).map((i, index)=>(
            <div className={styles.opening} key={index}>
                <div className={styles.head}>
                    <p>{data[i].role}</p>
                    <p>{data[i].description}</p>
                </div>
                <ul>
                    {data[i].req.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        ))}
        </div>
    </div>
  )
}

export default CurrentOpening