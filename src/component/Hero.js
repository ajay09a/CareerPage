import React , {useState, useEffect} from 'react'
import styles from '../styles/hero.module.css'
import { image } from '../Data';

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

export default Hero