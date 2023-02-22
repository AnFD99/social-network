import { configureStore } from '@reduxjs/toolkit'
import * as reducers from './ducks/index'

let store = configureStore({ reducer: reducers })

export { store }

// export const reducer = combineReducers({
//    profile: profileReducer,
//    dialogs: dialogsReducer,
//    users: usersReducer,
//    auth: authReducer,
//    init: initReducer,
// })


