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
        1000,
        `${text}Full Stack Developer👨‍💻`,
        1000,
        `${text}Backend 💻`,
        1000,
        `${text}Leetcoder 🤓`,
        1000,
        `${text}Engineer 🧑‍🔧`,
        1000,
      ]}
      wrapper="span"
      speed={2}
      deletionSpeed={1}
      repeat={Infinity}
    />
      </h2>
    </div>
  );
};

export default Typing;

