import styles from './ProjectsStyles.module.css';
import abctools from '../../assets/abctools.jpeg';
import tush from '../../assets/tush.jpg'
import fizytech from '../../assets/fizy-tech2.jpg'
import ProjectCard from '../../common/ProjectCard';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle"> Projects </h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={abctools} 
                link="www.abctools.io"
                h3="abctools"
                p="Digital Tools App"
            />
            <ProjectCard 
                src={tush} 
                link="#"
                h3="Tush Luxury"
                p="Clothing Accessories Shop"
            />

            <ProjectCard 
                src={fizytech} 
                link="#"
                h3="Fizy Technologies"
                p="Company Website"
            />
        </div>
    </section>
  )
}

export default Projects;