import { useState, useEffect } from "react";
import styles from './Clock.module.css'

const Clock = () => {
    const [date, setDate] = useState(new Date());


    useEffect(() => {
      const timer = setInterval(() => setDate(new Date()), 1000);
      // return () => clearInterval(timer);
    }, []);
  
    let hours = date.getHours()  % 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    let hoursDeg = ((hours / 12) * 360) + ((minutes/60)*30) +  ((seconds/180))
    let minutesDeg = ((minutes / 60) * 360) + ((seconds/60)*6)
    let secondsDeg = ((seconds / 60) * 360)
    
    const secondHandStyle = {
      transform: `rotate(${secondsDeg}deg)`,
    };
    const minuteHandStyle = {
      transform: `rotate(${minutesDeg}deg)`,
    };
    const hourHandStyle = {
      transform: `rotate(${hoursDeg}deg)`,
    };
  
    return (
      <div className={styles.clock}>
        <div className={styles.logo}>fourbit.io</div>
          <div
            className={styles.hour_hand}
            style={hourHandStyle}
          />
          <div
            className={styles.min_hand}
            style={minuteHandStyle}
          />
          <div
            className={styles.sec_hand}
            style={secondHandStyle}
          />
          <span className={styles.twelve}>|</span>
          <span className={styles.one}>|</span>
          <span className={styles.two}>|</span>
          <span className={styles.three}>|</span>
          <span className={styles.four}>|</span>
          <span className={styles.five}>|</span>
          <span className={styles.six}>|</span>
          <span className={styles.seven}>|</span>
          <span className={styles.eight}>|</span>
          <span className={styles.nine}>|</span>
          <span className={styles.ten}>|</span>
          <span className={styles.eleven}>|</span>
        </div>
    );
  }

export default Clock