import React, {useRef} from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {v1} from "uuid";
import {ProfilePageType} from "../../../redux/state";

export const MyPosts: React.FC<ProfilePageType> = (props) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPostHandler = () => {
        if (newPostElement && newPostElement.current) {
            let text = newPostElement.current.value
            console.log(text);
        }

    }
    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            <div>
                New Post
            </div>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPostHandler}>
                        Add post
                    </button>
                </div>
            </div>
            {props.posts.map(el => {
                return (
                    <Post key={el.id} text={el.text} id={el.id} likesCount={el.likesCount}/>
                )
            })}
        </div>
    )
}


