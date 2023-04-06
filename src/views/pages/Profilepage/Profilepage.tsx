/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react'
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
import { AppStateType } from 'store/store'

type MapStateType = {
   authId: string
   isLoading: boolean
   isAuth: boolean
   cover: string
   avatar: string
   name: string
   status: string
}

type MapDispatchType = {
   savePhoto: (id: string, photo: string) => void
   getProfile: (id: string) => void
   updateStatus: (id: string, status: string) => void
}

type PropsType = MapStateType & MapDispatchType

const Profilepage: FC<PropsType> = (props) => {
   let { id } = useParams<string>()

   useEffect(() => {
      refreshProfile(id)

   }, [id])

   const refreshProfile = (id: string) => {
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
            isLoading={props.isLoading}
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
               />
            </div>
         </div>
         <MyPosts />
      </div>
   )
}

let mapStateToProps = (state: AppStateType): MapStateType => ({
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

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(
   mapStateToProps,
   mapDispatchToProps,
)(Profilepage)

