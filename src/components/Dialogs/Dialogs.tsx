import React from "react";
import styles from './Dialogs.module.css'
import {Dialog} from "./Dialog";
import {v1} from "uuid";
import {Message} from "./Message";

export const Dialogs = () => {

    let dialogsData = [
        {id: v1(), name: 'Sergey'},
        {id: v1(), name: 'Vadim'},
        {id: v1(), name: 'Tolya'},
        {id: v1(), name: 'Fedya'},
        {id: v1(), name: 'Elina'},
        {id: v1(), name: 'Lenya'},
    ]

    let messageData = [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'I\'m fine!'},
    ]

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItem}>
                <ul>
                    {dialogsData.map(el => {
                        return (
                            <li key={el.id}>
                                <Dialog
                                    id={el.id}
                                    name={el.name}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles.messages}>
                <ul>
                    {messageData.map(el => {
                        return(
                        <li key={el.id}>
                        <Message
                        text={el.message}/>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}