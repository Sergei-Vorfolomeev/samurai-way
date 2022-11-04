import React from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {v1} from "uuid";
import {Message} from "./Message/Message";
import {MessagePageType} from "../../redux/state";

export const Dialogs:React.FC<MessagePageType> = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItem}>
                {props.dialogs.map(el => {
                    return (
                        <DialogItem key={el.id} id={el.id} name={el.name}/>
                    )
                })}
            </div>
            <div className={styles.messages}>
                {props.messages.map(el => {
                    return (
                        <Message key={el.id} text={el.message}/>
                    )
                })}
            </div>
        </div>
    )
}