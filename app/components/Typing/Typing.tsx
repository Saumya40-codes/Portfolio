'use client'

import React from 'react';
import styles from './typing.module.css';
import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  const text = "Hello 👋, I'm Saumya Shah \n ...";
  return (
    <div className={styles.typeJsWrapper}>
      <h2 className={styles.typeJsText}>
      <TypeAnimation
      sequence={[
        `${text} `, 
        2000,
        `${text}Full Stack Developer👨‍💻`,
        2000,
        `${text}Backend 💻`,
        2000,
        `${text}Engineer 🧑‍🔧`,
        2000,
      ]}
      wrapper="span"
      speed={2}
      deletionSpeed={2}
      repeat={Infinity}
    />
      </h2>
    </div>
  );
};

export default Typing;

