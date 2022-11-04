import React from "react";
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {
    postsData: Array<PostsType>
}
type PostsType = {
    id: string
    text: string
    likesCount: number
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    const {postsData} = props
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}