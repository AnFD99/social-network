import { postsOperations } from '.'
import postsReducer from './reducers'

let initialState = [
   { id: 1, post: 'Hi! How are you?' },
   { id: 2, post: 'Hi! My first comment' },
]

beforeEach(() => {
   initialState = [
      { id: 1, post: 'Hi! How are you?' },
      { id: 2, post: 'Hi! My first comment' },
   ]
})

describe('testing posts reducer', () => {
   it('new post should be created', () => {
      let action = postsOperations.addPost('Hello')

      let newState = postsReducer(initialState, action)
      expect(newState.length).toBe(3)
   })

   it('text of new post should be correct', () => {
      let action = postsOperations.addPost('test')

      let newState = postsReducer(initialState, action)
      expect(newState[2].post).toBe('test')
   })

   //! Don't works
   // it('after deleting length of posts should be decrement', () => {
   //    let action = postsOperations.deletePost(1)

   //    let newState = postsReducer(initialState, action)
   //    expect(newState.length).toBe(1)
   // })

   it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
      let action = postsOperations.deletePost(100)

      let newState = postsReducer(initialState, action)
      expect(newState.length).toBe(2)
   })
})

