import React, { FC } from 'react'
import styles from './PersonItem.module.css'

type PropsType = { name: string; id: number }

const PersonItem: FC<PropsType> = (props) => {
   return <div className={styles.dialog}>{props.name}</div>
}

export { PersonItem }

