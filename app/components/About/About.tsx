'use client'

import React from 'react'
import styles from './about.module.css'

const About = () => {
  return (
    <div id='About me'>
    <div className={styles.about} >
        <span className={styles.txt}>
        About me
        </span>
    </div>

    <div className={styles.wrds}>
      <h3 className={styles.descp}>
      "I build fullstack and backend applications. Over the past two years, I've worked with various technologies in this field, 
       developing a strong foundation through projects and study of core concepts.
       I like learning about distributed systems and automations, an area where I continue to expand my knowledge over the time."
      </h3>
    </div>
    </div>
  )
}

export default About
