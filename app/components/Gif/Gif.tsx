import React from 'react'
import styles from './gif.module.css'

const Gif = () => {
  return (
    <div className={styles.gif}>
      <img src='https://camo.githubusercontent.com/19db51af5f90f1b152bc0b9078f5fe97053955be5074f03f17019c70345bdcdb/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966' className={styles.imag} alt='gif'/>
    </div>
  )
}

export default Gif
