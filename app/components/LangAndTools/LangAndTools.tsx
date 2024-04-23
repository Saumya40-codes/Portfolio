'use client'

import React from 'react'
import styles from './langandtools.module.css'
import { heads } from '@/utils/items'
import { subheads } from '@/utils/items'

const LangAndTools = () => {

  return (
    <div id='Languages and Tools'>
        <div className= {styles.headng}>
      <h1>Languages and Tools</h1>
    </div>
    <div className={styles.heads}>
      {heads?.map((head, index) => (      
      <div
      key={index}
      className={styles.heads}>
        <select title={head} className={styles.slct} key={index}>
          <option key={index}>{head}</option>
          {subheads[index]?.map((subhead, index) => (
              subhead !== '' && <option key={index} className={styles.opts}>{subhead}</option>
          ))}
        </select>
        </div>
      ))}
      </div>
    </div>
  )
}

export default LangAndTools
