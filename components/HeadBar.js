import styles from '../styles/HeadBar.module.css'
import Link from 'next/link'

const HeadBar = function(props)
{
    return (
    <div className={styles.container}>
        <div className={styles.containerLogo}>{props.children}</div>
        <div className={styles.containerOptions}>
            {props.links.map((value, index)=>
            {
              return <Link key={index} href="#"><h3 className={value.selected?styles.selected:""}>{value.text}</h3></Link>
            })}
        </div>
    </div>
    );

}

export default HeadBar