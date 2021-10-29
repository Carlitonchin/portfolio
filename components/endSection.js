import styles from '../styles/endSection.module.css'

function EndSection({text})
{
    return <div className={styles.container}>{(text)? "<"+text + "/>":""}</div>
}

export default EndSection;