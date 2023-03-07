import { AppStateType } from "store/store"

export const getMessages = (state: AppStateType) => {
   return state.messages
}


