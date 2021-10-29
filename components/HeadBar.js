import { useEffect, useState } from 'react';
import styles from '../styles/HeadBar.module.css'
import ThreeLines from './threeLinesOptions';
import stylesInvisibleOptions from '../styles/invisibleOptions.module.css'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';


function getSection(fraction)
{
    if(fraction <= 0.31)
        return 0;

    if(fraction <= 0.80)
        return 1;

    if(fraction <= 1.36)
        return 2;

    return 3;
}

function VisibleOptions(props)
{
    return <div className={styles.containerOptions}>
            {props.links.map((value, index)=>
            {
              return <div className={styles.container_single_option} key={index}><a href={value.link}><h3 className={value.selected?styles.selected:""}>{value.text}</h3></a>
              {value.selected?<div className={styles.sub}></div>:""}
              </div>;
            })}
        </div>
}

function NotVisibleOptions(props)
{

    return <div className={stylesInvisibleOptions.containerOptions} >
            {props.links.map((value, index)=>
            {
              return <a key={index} href={value.link}><h3 className={value.selected?stylesInvisibleOptions.selected:""}>{value.text}</h3></a>
              {value.selected?<div className={stylesInvisibleOptions.sub}></div>:""}
            })}
        </div>
}


function Options(props)
{

    return <props.OptionType links={props.links}/>
}

function InvisibleOptions({children, showed})
{
    return <div id="invisibleOptions" className={(showed)?stylesInvisibleOptions.container + " " + stylesInvisibleOptions.container_showed :stylesInvisibleOptions.container}>{children}</div>
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
        <Options links={props.links} OptionType={VisibleOptions}/>

        <ThreeLines>
        <InvisibleOptions>
        <Options links={props.links} OptionType={NotVisibleOptions}/>
        </InvisibleOptions>
        </ThreeLines>
    </div>
    );

}

export default HeadBar