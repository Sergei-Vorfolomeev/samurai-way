import React from "react";
import styles from './Post.module.css'
import {PostsType} from "../../../../redux/state";

export const Post = (props:PostsType) => {
    return (
        <div className={styles.item}>
            <img src="https://pngimg.com/uploads/alien/alien_PNG27.png" alt="alien"></img>
            {props.text}
            <div>Like: {props.likesCount}</div>
        </div>

    )
}