import React from "react";
import styles from './Dialogs.module.css'
import {Dialog} from "./Dialog";
import {v1} from "uuid";
import {Message} from "./Message";

export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItem}>
                <Dialog id={v1()} name={'Sergey'} />
                <Dialog id={v1()} name={'Vadim'} />
                <Dialog id={v1()} name={'Tolya'} />
                <Dialog id={v1()} name={'Fedya'} />
                <Dialog id={v1()} name={'Elina'} />
                <Dialog id={v1()} name={'Lenya'} />
            </div>
            <div className={styles.messages}>
                <Message text={'Hello'}/>
                <Message text={'How are you?'}/>
                <Message text={'I\'m fine!'}/>
            </div>
        </div>
    )
}