import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../redux/state";


export const DialogItem = (props:DialogsType) => {
    const {id, name, avatar} = props
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <NavLink to={`${/dialogs/}${id}`}>{<img className={styles.ava} src={avatar} alt='ava'/>}{name}</NavLink>
        </div>
    )
}