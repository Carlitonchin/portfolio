import styles from '../styles/title.module.css'

function Title(props)
{
    return <div className = {styles.container}>
    <div className={styles.container_title}>
    <h1 className={styles.title}>{props.title}
    </h1>
    
    
    </div>
    <div className={styles.sub}></div>
    </div>

}

export default Title;