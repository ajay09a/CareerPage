import React from 'react'
import styles from '../styles/opening.module.css'

const CurrentOpening = () => {
  return (
    <div className={styles.container}>
        <h1>CurrentOpening</h1>
        <div>
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

const data = {
    1:{
        role: "SDE",
        description: "Software Development Engineer",
        req: ["Python", "API", "MongoDB", "Dockers", "Flutter", "SQL", "Mobile/Web App Development"],
    },
    2:{
        role: "SCE",
        description: "Supply Chain Engineer",
        req: ["Lean", "Six Sigma", "JIT", "Inventory", "Dockers", "KTE", "Supply Chain Management"],
    },
    3:{
        role: "SDE",
        description: "Software Development Engineer",
        req: ["Python", "API", "MongoDB", "Dockers", "Flutter", "SQL", "Mobile/Web App Development"],
    },
}

export default CurrentOpening