import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { usersOperations, usersSelectors } from 'store/ducks/users'
import Paginator from 'views/components/Paginator/Paginator'
import Preloader from 'views/components/Preloader/Preloader'
import { User } from './User'
import { loadingSelectors } from 'store/ducks/loading'
import { paginationSelectors } from 'store/ducks/pagination'

const UserItems = (props) => {
   useEffect(() => {
      props.getUsers(props.currentPage, props.pageSize)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.currentPage, props.pageSize])

   const onPageChanged = (pageNum) => {
      props.getUsers(pageNum, props.pageSize)
   }

   return (
      <>
         {props.isLoading ? (
            <Preloader />
         ) : (
            <div>
               <Paginator
                  onPageChange={onPageChanged}
               />
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

let mapStateToProps = (state) => {
   return {
      users: usersSelectors.getUsersList(state),
      pageSize: paginationSelectors.getPageSize(state),
      currentPage: paginationSelectors.getPageNumber(state),
      totalUsersCount: paginationSelectors.getUsersCount(state),
      isLoading: loadingSelectors.getUsersLoading(state),
      followingInProgress: usersSelectors.getFollowingInProgress(state),
   }
}

let mapDispatchToProps = {
   getUsers: usersOperations.getUsers,
   follow: usersOperations.follow,
   unfollow: usersOperations.unfollow,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserItems)

