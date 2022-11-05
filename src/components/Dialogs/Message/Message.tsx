import styles from "./Message.module.css";
import React from "react";


type MessageTypeProps = {
    text: string
}

export const Message = (props:MessageTypeProps) => {
    const {text} = props
    return (
        <div className={styles.message}>
            <div className={styles.text}>{text}</div>
        </div>
    )
}
