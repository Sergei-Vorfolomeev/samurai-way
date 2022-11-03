import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogPropsType = {
    id: string
    name: string
}

export const Dialog = (props:DialogPropsType) => {
    const {id, name} = props
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <NavLink to={`${/dialogs/}${id}`}>{name}</NavLink>
        </div>
    )
}