import React from 'react'
import { items } from '@/utils/items'
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <div className={styles.main}>
        {items.map((item) => (
        <div key={items.indexOf(item)} className={styles.opts}>
          <span>{item}</span>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
