import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {
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
            <Post text='Buy Buy!' likesCount = {5} />
            <Post text='How are you?' likesCount = {7} />
            <Post text='I am so happy!' likesCount = {23} />
            <Post text='It is my first post!' likesCount = {18} />
        </div>

    )
}


