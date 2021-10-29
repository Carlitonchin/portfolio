import styles from '../styles/Logo.module.css'
import Image from 'next/image'
function Logo()
{
    return <div className={styles.container}><a href="#" className={styles.p}><Image alt="logo" layout="fill" className={styles.logo} src="/logo.svg"/></a></div>
}

export default Logo;