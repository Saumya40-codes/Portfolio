import styles from './projects.module.css';
import { proj_det } from '@/utils/items';

const Projects = () => {
  return (
    <div className={styles.projsec}>
      <h2>Projects</h2>

      <div className={styles.projwrapper}>
        {proj_det.map((proj, index) => {
          return (
            <div className={styles.proj} key={index}>
              <h2>{proj.name}</h2>
              <p>{proj.descp}</p>

              <span>
                <ul className={styles.features}>
                  {proj.features.split('.').map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </ul>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
