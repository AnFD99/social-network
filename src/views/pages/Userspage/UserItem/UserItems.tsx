/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { usersOperations, usersSelectors } from 'store/ducks/users'
import Paginator from 'views/components/Paginator/Paginator'
import Preloader from 'views/components/Preloader/Preloader'
import { User } from './User'
import { loadingSelectors } from 'store/ducks/loading'
import { paginationSelectors } from 'store/ducks/pagination'
import { AppStateType } from 'store/store'
import { UserType } from 'models'

type MapStateType = {
   currentPage: number
   pageSize: number
   totalUsersCount: number
   isLoading: boolean
   users: UserType[]
   followingInProgress: number[]
}

type MapDispatchType = {
   getUsers: (page: number, size: number) => void
   unfollow: (id: string | number) => void
   follow: (id: string | number) => void
}

type PropsType = MapStateType & MapDispatchType

const UserItems: FC<PropsType> = (props) => {
   useEffect(() => {
      props.getUsers(props.currentPage, props.pageSize)
   }, [props.currentPage, props.pageSize])

   const onPageChanged = (pageNum: number) => {
      props.getUsers(pageNum, props.pageSize)
   }

   return (
      <>
         {props.isLoading ? (
            <Preloader />
         ) : (
            <div>
               <Paginator onPageChange={onPageChanged} />
               {props.users.map((u) => {
                  return (
                     <User
                        key={u._id}
                        user={u}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                     />
                  )
               })}
            </div>
         )}
      </>
   )
}

let mapStateToProps = (state: AppStateType): MapStateType => {
   return {
      users: usersSelectors.getUsersList(state),
      pageSize: paginationSelectors.getPageSize(state),
      currentPage: paginationSelectors.getPageNumber(state),
      totalUsersCount: paginationSelectors.getUsersCount(state),
      isLoading: loadingSelectors.getUsersLoading(state),
      followingInProgress: usersSelectors.getFollowingInProgress(state),
   }
}

let mapDispatchToProps: MapDispatchType = {
   getUsers: usersOperations.getUsers,
   follow: usersOperations.follow,
   unfollow: usersOperations.unfollow,
}

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(
   mapStateToProps,
   mapDispatchToProps,
)(UserItems)

