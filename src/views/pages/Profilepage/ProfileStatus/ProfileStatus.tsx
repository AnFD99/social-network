import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import styles from './ProfileStatus.module.css'

type PropsType = {
   status: string
   userId: number | string
   authId: number | string
   updateStatus: (id: number | string, status: string) => void
}

const ProfileStatus: FC<PropsType> = (props) => {
   const [editMode, setEditMode] = useState(false)
   const [status, setStatus] = useState(props.status)

   const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
      let text = e.target.value
      setStatus(text)
   }

   useEffect(() => {
      if (props.status !== status) {
         setStatus(props.status)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.status])

   return (
      <div className={styles.person__about_me}>
         About me
         {props.userId === props.authId ? (
            !editMode ? (
               <p
                  className={styles.status}
                  onDoubleClick={() => {
                     setEditMode(true)
                  }}
               >
                  {status == null ? 'Please, write a status' : status}
               </p>
            ) : (
               <input
                  type='text'
                  className={styles.status}
                  value={status == null ? 'Please, write a status' : status}
                  onChange={onChangeStatus}
                  onBlur={() => {
                     setEditMode(false)
                     if (status !== props.status) {
                        props.updateStatus(props.authId, status)
                     }
                  }}
                  autoFocus
               />
            )
         ) : (
            <p className={styles.status}>{status || '-----'}</p>
         )}
      </div>
   )
}

export { ProfileStatus }



