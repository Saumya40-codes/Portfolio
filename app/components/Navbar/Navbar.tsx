'use client'

import React from 'react'
import { items } from '@/utils/items'
import styles from './navbar.module.css';


const Navbar = () => {

  const handleClick = (item:string) => {
    const element = document.getElementById(item);
    element?.scrollIntoView({behavior:'smooth'});
  }

  return (
    <div>
      <div className={styles.main}>
        {items.map((item,index) => (
        <div key={index} className={styles.opts}>
          <span onClick={() => handleClick(item)}>{item}</span>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
