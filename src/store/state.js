import dialogsReducer from './dialogs/dialogsReducer'
import profileReducer from './profile/profileReducer'

let store = {
   _callSubscriber() {
      console.log('bla')
   },
   state: {
      profilePage: {
         postsData: [
            { id: 1, message: 'Hi! How are you?' },
            { id: 2, message: 'Hi! My first comment' },
         ],
         newPostText: '',
      },
      dialogsPage: {
         messagesData: [
            { id: 1, message: 'Hi! How are you?' },
            { id: 2, message: 'Yes' },
            { id: 3, message: 'I am busy' },
         ],
         dialogsData: [
            { id: 1, name: 'Dmitry' },
            { id: 2, name: 'Masha' },
            { id: 3, name: 'Vova' },
            { id: 4, name: 'Natasha' },
            { id: 5, name: 'Kolya' },
         ],
         newMessageText: '',
      },
   },
   subscribe(observer) {
      this._callSubscriber = observer
   },

   dispatch(action) {
      this.state.profilePage = profileReducer(this.state.profilePage, action)
      this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action)

      this._callSubscriber(this.state)
   },
}

export default store

