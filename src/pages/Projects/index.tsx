import { ProjectCard } from './ProjectCard'
import { projects } from './constants'
import styles from './style.module.scss'

const Projects = () => <div className={styles.wrapper}>
  <div className={styles.header}>PROJECTS</div>
  <div className={styles.cardWrapper}>
    {projects.map((project) => <ProjectCard name={project.name} desc={project.desc} logo={project.logo} links={project.links} roundIcon={project.roundIcon} />)}

  </div>
</div>

export default Projects