import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {v1} from "uuid";

type MyPostsPropsType = {
    postsData: Array<PostsType>
}
type PostsType = {
    id: string
    text: string
    likesCount: number
}
export const MyPosts:React.FC<MyPostsPropsType> = (props) => {
const{postsData} = props
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
            {postsData.map(el=>{
                return (
                    <Post key={el.id} text={el.text} likesCount = {el.likesCount}/>
                )
            })}
        </div>
    )
}


