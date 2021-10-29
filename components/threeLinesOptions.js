import { Children, cloneElement, useEffect, useState } from 'react';
import styles from '../styles/linesOptions.module.css'
import stylesInvisibleOptions from '../styles/invisibleOptions.module.css'


function Line()
{
    return <div className={styles.line}></div>
}

function ThreeLines({children})
{
    const [showed, setState] = useState(false);

    function handleClick(e)
    {
        console.log(e.target)
        if(e.target.id && e.target.id === "invisibleOptions")
            return;

        setState(!showed)
    }

    useEffect(()=>
    {
        if(showed)
            window.onclick = handleClick;

        else
            window.onclick = "";
    });

    return <>

    {Children.map(children, (child)=>{return cloneElement(child, {showed:showed})})};
    <div className={styles.container} onClick={handleClick}>
        <Line/>
        <Line/>
        <Line/>
    </div>
    </>
}

export default ThreeLines;