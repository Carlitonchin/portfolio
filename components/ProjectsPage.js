import Title from '../components/title'
import styles from '../styles/projects.module.css'
import stylesSingleProject from '../styles/singleProject.module.css'

function SingleProject({title, description, url})
{
    return <div className={stylesSingleProject.container}>

       
        <div className={stylesSingleProject.container_title}>
        <h2 className={stylesSingleProject.title}>{title}</h2>
        </div>
        
        <p className={stylesSingleProject.description}>{description}</p>
        <a className={stylesSingleProject.a} href="{url}"><div className={stylesSingleProject.visitButton}>Visit</div></a>

    </div>
}

function Projects()
{
    return <div className={styles.container} id="projectsPage">
    <Title title="Projects"/>
    <SingleProject title="Data-NBA" description="A powerful tool for searching NBA stats" url="https://data-nba.github.io"/>
    </div>
}

export default Projects;