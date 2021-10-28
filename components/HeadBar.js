import { useEffect, useState } from 'react';
import styles from '../styles/HeadBar.module.css'


function getSection(fraction)
{
    if(fraction <= 0.4)
        return 0;

    if(fraction <= 1.8)
        return 1;

    return 1;
}

const HeadBar = function(props)
{

    const [section, setSection] = useState(0);
    props.links[section].selected = true;

    function handleScroll()
    {
        let sections = 2;
        let h = document.body.clientHeight;
        let topScroll = window.scrollY;
        console.log(topScroll/h*sections)
        let newSection = getSection(topScroll/h*sections);
        if(section !== newSection)
        {

            props.links[section].selected = false;
            setSection(newSection);
        }
    }

    useEffect(()=>
    {
        window.onscroll = handleScroll
    });
    return (
    <div className={styles.container}>
        <div className={styles.containerLogo}>{props.children}</div>
        <div className={styles.containerOptions}>
            {props.links.map((value, index)=>
            {
              return <div className={styles.container_single_option} key={index}><a href={value.link}><h3 className={value.selected?styles.selected:""}>{value.text}</h3></a>
              {value.selected?<div className={styles.sub}></div>:""}
              </div>;
            })}
        </div>
    </div>
    );

}

export default HeadBar