import React, { FC } from 'react'
import { connect } from 'react-redux'
import { messagesSelectors, messagesOperations } from 'store/ducks/messages'
import styles from './Dialogspage.module.css'
import { Messages } from './Messages/Messages'
import { Persons } from './Persons/Persons'
import { dialogsSelectors } from 'store/ducks/dialogs'
import { DialogType, MessageType } from 'models'
import { AppStateType } from 'store/store'

type MapStateType = {
   dialogs: DialogType[]
   messages: MessageType[]
}

type MapDispatchType = {
   sendMessage: (text: string) => void
}

type PropsType = MapStateType & MapDispatchType

const Dialogspage: FC<PropsType> = (props) => {
   return (
      <div>
         <div className={styles.chat}>
            <div className={styles.dialogs}>
               <Persons dialogs={props.dialogs} />
            </div>
            <div className={styles.messages}>
               <Messages
                  messages={props.messages}
                  sendMessage={props.sendMessage}
               />
            </div>
         </div>
      </div>
   )
}

let mapStateToProps = (state: AppStateType): MapStateType => {
   return {
      dialogs: dialogsSelectors.getDialogs(state),
      messages: messagesSelectors.getMessages(state),
   }
}

let mapDispatchToProps: MapDispatchType = {
   sendMessage: messagesOperations.sendMessage,
}

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(
   mapStateToProps,
   mapDispatchToProps,
)(Dialogspage)

