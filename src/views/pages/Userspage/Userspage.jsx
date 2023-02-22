import React from 'react'
import styles from './Userspage.module.css'
import UsersItems from './UserItem/UserItems'

const Userspage = (props) => {
   return (
      <div className={styles.users__list}>
         <UsersItems />
      </div>
   )
}

export default Userspage



