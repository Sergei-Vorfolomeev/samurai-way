import React from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {v1} from "uuid";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

type DialogType = {
    id: string
    name: string
}

type MessageType = {
    id: string
    message: string
}

export const Dialogs:React.FC<DialogsPropsType> = (props) => {
    const {dialogsData,messagesData} = props
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItem}>
                {dialogsData.map(el => {
                    return (
                        <DialogItem key={el.id} id={el.id} name={el.name}/>
                    )
                })}
            </div>
            <div className={styles.messages}>
                {messagesData.map(el => {
                    return (
                        <Message key={el.id} text={el.message}/>
                    )
                })}
            </div>
        </div>
    )
}