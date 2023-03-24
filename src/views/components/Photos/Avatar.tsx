import React from 'react'
import styles from './Avatar.module.css'
import avatar from '../../assets/images/unnamed.jpg'

const Avatar = (props: { avatar: string }) => {
  return (
     <div className={styles.person__avatar}>
        {props.avatar === '' ? (
           <img src={avatar} className={styles.noneImg} alt='avatar' />
        ) : (
           <img
              src={props.avatar}
              className={styles.person__img}
              alt='avatar'
           />
        )}
     </div>
  )
}




export default Avatar