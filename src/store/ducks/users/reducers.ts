import { helpers } from 'utils'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'
import { UserType } from 'models'

type ToggleFollowingType = {
   fetching: boolean
   userId: number
}

const usersReducer = createSlice({
   name: 'users',
   initialState: initialState.users,
   reducers: {
      followSuccess: (state, action: PayloadAction<number>) => {
         state.usersList = helpers.updateObjectInArray(
            state.usersList,
            action.payload,
            'id',
            { followed: true },
         )
      },
      unfollowSuccess: (state, action: PayloadAction<number>) => {
         state.usersList = helpers.updateObjectInArray(
            state.usersList,
            action.payload,
            'id',
            { followed: false },
         )
      },
      setUsers: (state, action: PayloadAction<UserType[]>) => {
         state.usersList = action.payload
      },
      toggleFollowingProgress: (
         state,
         action: PayloadAction<ToggleFollowingType>,
      ) => {
         state.followingInProgress = action.payload.fetching
            ? [...state.followingInProgress, action.payload.userId]
            : state.followingInProgress.filter(
                 (id) => id !== action.payload.userId,
              )
      },
   },
})

const { actions, reducer } = usersReducer

export const {
   followSuccess,
   unfollowSuccess,
   setUsers,
   toggleFollowingProgress,
} = actions

export default reducer

// let initialState = {
//    users: [],
//    totalUsersCount: 0,
//    pageSize: 4,
//    currentPage: 1,
//    isFetching: false,
//    followingInProgress: [],
// }

// const usersReducer = (state = initialState, action) => {
//    switch (action.type) {
//       case types.FOLLOW:
//          return {
//             ...state,
//             users: helpers.updateObjectInArray(
//                state.users,
//                action.userId,
//                'id',
//                { followed: true },
//             ),
//          }
//       case types.UNFOLLOW:
//          return {
//             ...state,
//             users: helpers.updateObjectInArray(
//                state.users,
//                action.userId,
//                'id',
//                { followed: false },
//             ),
//          }
//       case types.SET_USERS:
//          return { ...state, users: action.users }
//       case types.SET_CURRENT_PAGE:
//          return { ...state, currentPage: action.page }
//       case types.SET_TOTAL_USERS_COUNT:
//          return { ...state, totalUsersCount: action.count }
//       case types.TOGGLE_IS_FETCHING:
//          return { ...state, isFetching: action.fetching }
//       case types.TOGGLE_FOLLOWING_PROGRESS:
//          return {
//             ...state,
//             followingInProgress: action.fetching
//                ? [...state.followingInProgress, action.userId]
//                : state.followingInProgress.filter((id) => id !== action.userId),
//          }
//       default:
//          return state
//    }

// }

