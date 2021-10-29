import {useState, useEffect} from 'react';
import styles from '../styles/welcome.module.css'

function Welcome(props)
{
    
    const [[word, realWord,list], setState] = useState(["", "", props.list])
    console.log(word)
    useEffect(()=>
    {
        let time = 1000;

        if(list.length === 1)
            time = 300;

        if(word.length === 0){
            setTimeout(() => {
                setState(["<", "", props.list])
            }, time);
        }


        else if(props.word.length > word.length - 1)
            setTimeout(() => {
                setState([word + props.word[word.length - 1], realWord + props.word[word.length - 1], list.filter((value) =>
                {
                    return value.lastIndexOf(realWord + props.word[word.length - 1]) != -1;
                })]);
            }, time);

        else
        {
            let yes = false;
            let character = '';
            let new_list = list;
            if(word[word.length - 1] === props.word[props.word.length - 1]){
                character = "/"
                yes = true;
            }

            else if(word[word.length - 1] === '/'){
                character = ">"
                yes = true;
                new_list = []
            }

            if(yes)
            {
                setTimeout(() => {
                    setState([word + character, realWord, new_list])
                }, time);
            }

        }

    });

    if(word.length > 0)
    return <div className={styles.container}>{word}
    {(list.length > 0)?
        <div className={styles.auto_complete}>
        {list.map((value, index)=>
        {
            return <div key={value} className={index===0?styles.with_color:""}>{<div className={styles.text_auto_complete}>{value}</div>}</div>;
        })}
    </div>:
    ""
    }

    </div>;

    return <div></div>
}

export default Welcome;