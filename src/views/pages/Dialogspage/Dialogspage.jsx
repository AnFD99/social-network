import React from 'react'
import { connect } from 'react-redux'
import { messagesSelectors, messagesOperations } from 'store/ducks/messages'
import styles from './Dialogspage.module.css'
import { Messages } from './Messages/Messages'
import { Persons } from './Persons/Persons'
import { dialogsSelectors } from 'store/ducks/dialogs'

const Dialogspage = (props) => {
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

let mapStateToProps = (state) => {
   return {
      dialogs: dialogsSelectors.getDialogs(state),
      messages: messagesSelectors.getMessages(state),
   }
}

export default connect(mapStateToProps, {
   sendMessage: messagesOperations.sendMessage,
})(Dialogspage)




