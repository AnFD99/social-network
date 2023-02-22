import React from 'react'
import { MessageItem } from 'views/components/MessageItem/MessageItem'
import styles from './Messages.module.css'
import { TextForm } from 'views/components/TextForm/TextForm'

const Messages = (props) => {
   const messagesElements = props.messages.map((m) => (
      <MessageItem message={m.message} key={m.id} id={m.id} />
   ))
   return (
      <div className={styles.message}>
         {messagesElements}
         <TextForm addText={props.sendMessage} buttonTitle='Send' />
      </div>
   )
}

export { Messages }

