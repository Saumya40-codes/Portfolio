'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './langandtools.module.css'
import { heads } from '@/utils/items'
import { subheads } from '@/utils/items'

const LangAndTools = () => {

  return (
    <div id='Languages and Tools'>
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
      key={index}
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
        <select title={head} className={styles.slct} key={index}>
          <option key={index}>{head}</option>
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
