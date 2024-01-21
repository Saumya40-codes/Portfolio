import React from 'react'
import styles from './snackbar.module.css'

interface Props{
    show:boolean
}

const Snackbar = ({show}:Props) => {
  return (
    <div>
        {show && <div className={styles.snackbar}>
            Message received!
        </div>
        }
    </div>
  )
}

export default Snackbar
