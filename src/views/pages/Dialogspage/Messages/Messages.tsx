import React, { FC } from 'react'
import { MessageItem } from 'views/components/MessageItem/MessageItem'
import styles from './Messages.module.css'
import { TextForm } from 'views/components/TextForm/TextForm'
import { MessageType } from 'models'

type PropsType = {
   messages: MessageType[]
   sendMessage: (text: string) => void
}

const Messages: FC<PropsType> = (props) => {
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

