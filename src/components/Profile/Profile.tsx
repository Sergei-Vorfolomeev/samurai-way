import React from "react";
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export const Profile = (props:ProfilePageType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}/>
        </div>
    )
}