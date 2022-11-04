import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogPropsType = {
    id: string
    name: string
}

export const DialogItem = (props:DialogPropsType) => {
    const {id, name} = props
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <NavLink to={`${/dialogs/}${id}`}>{name}</NavLink>
        </div>
    )
}