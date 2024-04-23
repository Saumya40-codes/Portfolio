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
      "Second-year undergraduate student enrolled at 
      <a href="https://www.ahduni.edu.in/" target='__blank'> Ahmedabad University</a>, 
      where I am pursuing a B.Tech degree in Computer Science and Engineering. 
      My keen interest lies in exploring various technologies within the realm of computer science. 
      I find joy in problem-solving and continuous learning.
      I am always open to new opportunities and challenges."
      </h3>
    </div>
    </div>
  )
}

export default About
