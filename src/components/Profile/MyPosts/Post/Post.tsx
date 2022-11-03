import React from "react";
import styles from './Post.module.css'

type Message = {
    text: string;
    likesCount: number;
}

export const Post = (props:Message) => {
    return (
        <div className={styles.item}>
            <img src="https://pngimg.com/uploads/alien/alien_PNG27.png" alt="alien"></img>
            {props.text}
            <div>Like: {props.likesCount}</div>
        </div>

    )
}