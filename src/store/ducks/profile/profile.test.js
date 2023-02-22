import { profileOperations } from './index'
import profileReducer from './reducers'

describe('testing profile reducer', () => {

   it('new post should be created', () => {
      let action = profileOperations.addPost('Hello')
      let newState = profileReducer(profileReducer.initialState, action)
      expect(newState.postsData.length).toBe(3)
   })

   it('message of new post should be correct', () => {
      let action = profileOperations.addPost('test')
      let newState = profileReducer(profileReducer.initialState, action)
      expect(newState.postsData[2].message).toBe('test')
   })

   it('after deleting length of messsages should be decrement', () => {
      let action = profileOperations.deletePost(1)
      let newState = profileReducer(profileReducer.initialState, action)
      expect(newState.postsData.length).toBe(1)
   })

   it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
      let action = profileOperations.deletePost(100)
      let newState = profileReducer(profileReducer.initialState, action)
      expect(newState.postsData.length).toBe(2)
   })
})














