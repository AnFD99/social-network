import React, { useEffect } from 'react'
import styles from './Cover.module.css'
import { helpers } from 'utils'
import { useState } from 'react'
import Preloader from '../Preloader/Preloader'

const Cover = (props) => {
   const [cover, setCover] = useState(props.cover)
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
      if (props.cover !== cover) {
         setCover(props.cover)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.profile])

   const onMainPhotoSelected = async (e) => {
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
         {isLoading ? (
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

