'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './about.module.css'

const About = () => {
  return (
    <div>
    <motion.div
      className={styles.about}
      initial={{
        opacity: 0,
        x: 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0, 
        transition: {
          duration: 2 
        }
      }}
      viewport={{ once: false }}
    >
        <span className={styles.txt}>
        About me
        </span>
    </motion.div>

    <motion.div 
    className={styles.wrds}
    initial={{
      opacity: 0,
      y:100,
    }}
    whileInView={{
      opacity: 1,
      y: 0, 

      transition: {
        duration: 1 
      }
    }}
    viewport={{ once: false }}
    >
      <h3 className={styles.descp}>
      "Second-year undergraduate student enrolled at 
      <a href="https://www.ahduni.edu.in/" target='__blank'> Ahmedabad University</a>, 
      where I am pursuing a B.Tech degree in Computer Science and Engineering. 
      My keen interest lies in exploring various technologies within the realm of computer science. 
      I find joy in problem-solving and continuous learning.
      I am always open to new opportunities and challenges."
      </h3>
    </motion.div>
    </div>
  )
}

export default About
