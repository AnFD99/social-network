import React, { useEffect } from 'react'
import styles from './Profilepage.module.css'
import Preloader from 'views/components/Preloader/Preloader'
import MyPosts from './MyPosts/MyPosts'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'
import { profileOperations, profileSelectors } from 'store/ducks/profile'
import { authSelectors } from 'store/ducks/auth'
import { Navigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Cover from 'views/components/Photos/Cover'
import Avatar from 'views/components/Photos/Avatar'
import { loadingSelectors } from 'store/ducks/loading'

const Profilepage = (props) => {
   let { id } = useParams()

   useEffect(() => {
      refreshProfile(id)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id])

   const refreshProfile = (id) => {
      if (!id) {
         id = props.authId
         if (!id) {
            return <Navigate to='/login' />
         }
      }
      props.getProfile(id)
   }

   if (props.isLoading) {
      return <Preloader />
   }

   return (
      <div>
         <Cover
            cover={props.cover}
            userId={id}
            authId={props.authId}
            savePhoto={props.savePhoto}
         />
         <div className={styles.person}>
            <Avatar avatar={props.avatar} />
            <div className={styles.person__information}>
               <h2 className={styles.person__name}>{props.name}</h2>

               <ProfileStatus
                  userId={id}
                  authId={props.authId}
                  status={props.status}
                  updateStatus={props.updateStatus}
                  getStatus={props.getStatus}
               />
            </div>
         </div>
         <MyPosts />
      </div>
   )
}

let mapStateToProps = (state) => ({
   status: profileSelectors.getProfileStatus(state),
   cover: profileSelectors.getProfileCover(state),
   avatar: profileSelectors.getProfileAvatar(state),
   name: profileSelectors.getProfileName(state),
   authId: authSelectors.getAuthUserId(state),
   isAuth: authSelectors.getIsAuth(state),
   isLoading: loadingSelectors.getProfileLoading(state),
})

let mapDispatchToProps = {
   getProfile: profileOperations.getProfile,
   updateStatus: profileOperations.updateStatus,
   savePhoto: profileOperations.getPhoto,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profilepage)


