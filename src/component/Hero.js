import React , {useState, useEffect} from 'react'
import styles from '../styles/hero.module.css'

const Hero = () => {
    let count = 0;
    const [pic, setpic] = useState(image[count]);
    useEffect(() => {
        const interval = setInterval(() => {
            setpic(image[Math.floor(Math.random() * image.length)]);
          }, 2000);
      
          return () => clearInterval(interval);

    }, [])
    
  return (
    <div className={styles.heroContainer}>
        <img src={pic} alt='hero' />
    </div>
  )
}

const image = [
    "https://img.freepik.com/premium-vector/career-website-banner-concept-with-thin-line-flat-design_56103-101.jpg",
    "https://wallpapercave.com/wp/wp1973373.jpg",
    "https://wallpaperaccess.com/full/4755970.jpg",
    "https://wallpapercave.com/wp/wp3616187.jpg",

]

export default Hero