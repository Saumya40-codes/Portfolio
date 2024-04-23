'use client'

import styles from './projects.module.css';
import { proj_det } from '@/utils/items';

const Projects = () => {
  return (
    <div className={styles.projsec} id='Projects'>
    <div>
      <h2>Projects</h2>
    </div>

      <div className={styles.projwrapper}>
        {proj_det.map((proj, index) => {
          return (
            <div key={index} >
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
          </div>
          );
        })}
      </div>
      <div className={styles.more}>
          <h2>Find out more</h2>
          <div>
          <a href='https://github.com/Saumya40-codes?tab=repositories' target='__blank'>here!</a>
        </div>
        </div>
      <hr />
    </div>
  );
};

export default Projects;
