'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './langandtools.module.css'

const LangAndTools = () => {

  const heads = ['Java','HTML','CSS','JavaScript','TypeScript','Python','C++','Databases','Other tools']
  const subheads = [[''],[''],[''],['React.js', 'Node.js', 'Express.js', 'Next.js'],[''],['Pandas', 'Numpy'],[''],['MySQL', 'MongoDB'],['Git','Github','Figma']];

  return (
    <div>
        <motion.div
        className= {styles.headng}
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0, 
        transition: {
          duration: 2 
        },
      }}
      viewport={{ once: false }}
    >
      <h1>Languages and Tools</h1>
    </motion.div>
    <div className={styles.heads}>
      {heads?.map((head, index) => (      
      <motion.div
      className={styles.heads}
      initial={{
        opacity: 0,
        x: index === 0 ? -50 : index === heads.length - 1 ? 50 : -1,
      }}
      whileInView={{
        opacity: 1,
        x: 0, 
        transition: {
          duration: 1 
        },
      }}
      viewport={{ once: false }}
    >
        <select title={head} className={styles.slct}>
          <option>{head}</option>
          {subheads[index]?.map((subhead, index) => (
              subhead !== '' && <option key={index} className={styles.opts} disabled>{subhead}</option>
          ))}
        </select>
        </motion.div>
      ))}
      </div>
    </div>
  )
}

export default LangAndTools
