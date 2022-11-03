import styles from "./Dialogs.module.css";
import React from "react";


type MessageTypeProps = {
    text: string
}

export const Message = (props:MessageTypeProps) => {
    const {text} = props
    return (
        <div className={styles.message}>
            {text}
        </div>
    )
}
