'use client'

import styles from './projects.module.css';
import { proj_det } from '@/utils/items';
import {motion} from 'framer-motion';

const Projects = () => {
  return (
    <div className={styles.projsec} id='Projects'>
    <motion.div
      initial={{
        opacity: 0,
        x: 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0, 
        transition: {
          duration: 2 
        }
      }}
      viewport={{ once: false }}
    >
      <h2>Projects</h2>
    </motion.div>

      <div className={styles.projwrapper}>
        {proj_det.map((proj, index) => {
          return (
            <motion.div
            key={index}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0, 
        transition: {
          duration: 1
        }
      }}
      viewport={{ once: false }}
    >
            <div className={styles.proj} key={index}>
              <div className={styles.projHead} key={index}>
                <h2>{proj.name}</h2>
                <a href={proj.link} target='__blank'>
                <img src='https://i.pinimg.com/originals/48/e0/73/48e07378e01dd719c060c1f2f2b5cb00.png' alt='githublink' />
                </a>
              </div>
              <p>{proj.descp}</p>

              <span>
                <ul className={styles.features}>
                  {proj.features.split('.').map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </ul>
              </span>

              {index === 1 || index === 2 ? (
                <div className={styles.rule}>
                <hr />
                </div>
                )
              :(
              <hr />
              )}

              <ul className={styles.techstack}>
                {proj.tech.map((lang, index) => {
                  return <li key={index}>{lang}</li>;
                })}
              </ul>
            </div>
          </motion.div>
          );
        })}
      </div>
      <div className={styles.more}>
          <h2>Find out more</h2>
          <motion.div
      initial={{
        opacity: 0,
        x: 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0, 
        transition: {
          duration: 1
        }
      }}
      viewport={{ once: false }}
    >
          <a href='https://github.com/Saumya40-codes?tab=repositories' target='__blank'>here!</a>
        </motion.div>
        </div>
      <hr />
    </div>
  );
};

export default Projects;
