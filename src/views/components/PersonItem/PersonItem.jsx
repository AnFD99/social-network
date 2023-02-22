import React from 'react'
import styles from './PersonItem.module.css'

const PersonItem = (props) => {
   return <div className={styles.dialog}>{props.name}</div>
}

export { PersonItem }

