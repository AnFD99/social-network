import { AppStateType } from "store/store"

export const getPosts = (state: AppStateType) => {
   return state.posts
}

