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
    return <div className={styles.container}>
    <div className={styles.container_skill}>
    {(props.children)?
    <div className={styles.icon_expanded} onClick={handleExpand}>
        <div className={styles.minus}>
        </div>
        {(!expanded)?<div className={styles.plus}></div>:""}
    </div>
    :
    <div className={styles.margin_expand_icon}></div>
}
        <div className={styles.skill}>{props.skill}</div>
    
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
    return <div className={stylesFather.container}>
    <Title title={"Skills"}/>
    <div className={stylesFather.container_skills}>
    
    <div className={stylesFather.skills}>
    <TreeSkills skill={"frontend"}>
        <div className={stylesFather.skills}>
        <TreeSkills skill="html5"/>
        <TreeSkills skill="css"/>
        <TreeSkills skill="javascript">
            <div className={stylesFather.skills}>
                <TreeSkills skill="react js"/>
            </div>
        </TreeSkills>
        </div>
    </TreeSkills>

    <TreeSkills skill={"backend"}>
        <div className={stylesFather.skills}>
            <TreeSkills skill={"node js"}>
            <div className={stylesFather.skills}>
            <TreeSkills skill={"express"}/>
        </div>
            </TreeSkills>

            <TreeSkills skill={".net"}>
            <div className={stylesFather.skills}>
            <TreeSkills skill={"asp"}/>
        </div>
            </TreeSkills>

            <TreeSkills skill={"python"}/>
        </div>
    </TreeSkills>
    <TreeSkills skill={"others"}>
    <div className={stylesFather.skills}>
            <TreeSkills skill={"math"}/>

            <TreeSkills skill={"data structures"}/>

            <TreeSkills skill={"algorithms"}/>
        </div>
    </TreeSkills>
    </div>
    </div>
    </div>
}

export default Skills;