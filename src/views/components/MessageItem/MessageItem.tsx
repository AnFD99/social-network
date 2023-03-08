import React from 'react'
import styles from './MessageItem.module.css'

const MessageItem = (props: { message: string; id: number }) => {
   return <div className={styles.messageItem}>{props.message}</div>
}

export { MessageItem }

