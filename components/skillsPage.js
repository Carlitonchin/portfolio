import Title from '../components/title'
import { useState } from 'react';
import styles from '../styles/treeSkills.module.css'
import stylesFather from '../styles/skills.module.css'

function TreeSkills(props)
{
    const [expanded, changeExpand] = useState(false);

    function handleExpand()
    {
        changeExpand(!expanded);
    }

    function handleMouseDown()
    {
        console.log("hello")
    }

    return <div className={styles.container}>
    <div className={styles.container_skill}>

        <div onClick={handleExpand} onMouseDown={handleMouseDown} className={styles.skill}>
        {(props.children)?
    <div className={styles.icon_expanded} onClick={handleExpand}>
        <div className={styles.minus}>
        </div>
        {(!expanded)?<div className={styles.plus}></div>:""}
    </div>
    :
    <div className={styles.margin_expand_icon}></div>
}
        {props.skill} <img src={props.icon}></img></div>
    
</div>
{(props.children && expanded)?
<div className={styles.children}>
<div className={styles.line}></div>
     <div className={styles.margin}>{props.children}</div>
     </div>: ""}
    </div>
}

function Skills()
{
    return <div className={stylesFather.container} id="skillsPage">
    <Title title={"Skills"}/>
    <div className={stylesFather.container_skills}>
    
    <div className={stylesFather.skills}>
    <TreeSkills skill={"frontend"} icon={"frontend.svg"}>
        <div className={stylesFather.skills}>
        <TreeSkills skill="html5" icon={"html.svg"}/>
        <TreeSkills skill="css3" icon={"css.svg"}/>
        <TreeSkills skill="javascript" icon={"js.svg"}>
            <div className={stylesFather.skills}>
                <TreeSkills skill="react js" icon={"react.svg"}/>
            </div>
        </TreeSkills>
        </div>
    </TreeSkills>

    <TreeSkills skill={"backend"} icon={"backend.svg"}>
        <div className={stylesFather.skills}>
            <TreeSkills skill={"node js"} icon={"node.svg"}>
            <div className={stylesFather.skills}>
            <TreeSkills skill={"express js"} icon={"express.svg"}/>
        </div>
            </TreeSkills>

            <TreeSkills skill={".net"} icon={"csharp.svg"}>
            <div className={stylesFather.skills}>
            <TreeSkills skill={"asp.net"} icon={"microsoft.svg"}/>
        </div>
            </TreeSkills>

            <TreeSkills skill={"python"} icon={"python.svg"}/>
        </div>
    </TreeSkills>
    <TreeSkills skill={"others"} icon={"other.svg"}>
    <div className={stylesFather.skills}>
            <TreeSkills skill={"math"} icon={"math.svg"}/>

            <TreeSkills skill={"data structures"} icon={"data.svg"}/>

            <TreeSkills skill={"algorithms"} icon={"algorithm.svg"}/>
        </div>
    </TreeSkills>
    </div>
    </div>
    </div>
}

export default Skills;