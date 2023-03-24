import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './User.module.css'
import avatar from '../../../assets/images/unnamed.jpg'
import { UserType } from 'models'

type PropsType = {
   user: UserType
   followingInProgress: number[]
   unfollow: (id: number | string) => void
   follow: (id: number | string) => void
}

const User: FC<PropsType> = (props) => {
   return (
      <div className={styles.user__block}>
         <div className={styles.user__left}>
            <NavLink to={`/profile/${props.user._id}`}>
               <div className={styles.avatar}>
                  {/* {props.user.photos.avatarImage === '' ? ( */}
                  <img src={avatar} className={styles.noneImg} alt='avatar' />
                  {/* ) : (
                     <img
                      src={props.user.photos.avatarImage}
                         className={styles.img}
                         alt='avatar'
                      />
                   )} */}
               </div>
            </NavLink>
            {/* <div className={styles.btn}>
               {props.user.followed ? (
                  <button
                     disabled={props.followingInProgress.some(
                        (id) => id === props.user.id,
                     )}
                     className={styles.unfollow}
                     onClick={() => {
                        props.unfollow(props.user.id)
                     }}
                  >
                     Unfollow
                  </button>
               ) : (
                  <button
                     disabled={props.followingInProgress.some(
                        (id) => id === props.user.id,
                     )}
                     className={styles.follow}
                     onClick={() => {
                        props.follow(props.user.id)
                     }}
                  >
                     Follow
                  </button>
               )}
            </div> */}
         </div>
         <div className={styles.user__right}>
            <div className={styles.user__information}>
               <div className={styles.user__name}>{props.user.name}</div>
               <div className={styles.user__status}>
                  {props.user.status || '---'}
               </div>
            </div>
            <div className={styles.user__location}>
               <div className={styles.city}>{props.user.location.city}</div>
               <div className={styles.country}>
                  {props.user.location.country}
               </div>
            </div>
         </div>
      </div>
   )
}

export { User }

