import React, { ChangeEvent, FC, useEffect } from 'react'
import styles from './Cover.module.css'
import { helpers } from 'utils'
import { useState } from 'react'
import Preloader from '../Preloader/Preloader'

type PropsType = {
   cover: string
   authId: number | string
   userId: number | string
   isLoading: boolean
   savePhoto: (id: number | string, photo: string) => void
}

const Cover: FC<PropsType> = (props) => {
   const [cover, setCover] = useState<string>(props.cover)
   const [isLoading, setIsLoading] = useState<boolean>(false)

   useEffect(() => {
      if (props.cover !== cover) {
         setCover(props.cover)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.cover])

   const onMainPhotoSelected = async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files.length) {
         const photo = e.target.files[0]
         const base64 = await helpers.convertToBase64(photo)
         setIsLoading(true)
         try {
            await props.savePhoto(props.authId, base64)
         } catch (error) {
            console.log(error)
         } finally {
            setIsLoading(false)
         }
      }
   }

   return (
      <div className={styles.cover}>
         {props.isLoading || isLoading ? (
            <Preloader />
         ) : (
            <>
               {cover === '' ? (
                  <>
                     <div className={styles.cover__back}></div>
                  </>
               ) : (
                  <>
                     <img className={styles.cover__img} src={cover} alt='' />
                  </>
               )}
               {props.userId === props.authId ? (
                  <div className={styles.addPhotoWrap}>
                     <label className={styles.addPhotoLabel}>
                        <input
                           className={styles.addPhotoInput}
                           type='file'
                           name='photo'
                           onChange={onMainPhotoSelected}
                        />
                     </label>
                  </div>
               ) : null}
            </>
         )}
      </div>
   )
}

export default Cover







