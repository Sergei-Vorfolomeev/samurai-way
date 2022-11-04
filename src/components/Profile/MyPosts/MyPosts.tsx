import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {v1} from "uuid";
import {ProfilePageType} from "../../../redux/state";

export const MyPosts:React.FC<ProfilePageType> = (props) => {
    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            <div>
                New Post
            </div>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {props.posts.map(el=>{
                return (
                    <Post key={el.id} text={el.text} id={el.id} likesCount = {el.likesCount}/>
                )
            })}
        </div>
    )
}


