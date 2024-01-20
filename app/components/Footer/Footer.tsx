import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.foot}>
      <span className={styles.made}>
      Made with <span className={styles.mainLang}>Next.js</span> and <span className={styles.mainLang}>Vanilla CSS</span>
      </span>
      <div className={styles.foot}>
        <h3 className={styles.made}>
            Send me a message
        </h3>

        <div>
        <span className={styles.made}>Name: </span> <input title='text' type='text' className={styles.input} />
        </div>
        <div>
        <span className={styles.messName}>Message: </span> <textarea title='text' className={styles.mess} />
        </div>

        <button className={styles.btn}>Send</button>
       </div>
    </div>
  )
}

export default Footer
