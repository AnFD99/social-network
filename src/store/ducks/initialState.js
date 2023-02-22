const initialState = {
   auth: { user: null, isAuth: false },
   loading: {
      authLoading: false,
      profileLoading: false,
		dialogsLoading: false,
      usersLoading: false,
   },
   messages: [
      { id: 1, message: 'Hi! How are you?' },
      { id: 2, message: 'Yes' },
      { id: 3, message: 'I am busy' },
   ],
   dialogs: [
      { id: 1, name: 'Dmitry' },
      { id: 2, name: 'Masha' },
      { id: 3, name: 'Vova' },
      { id: 4, name: 'Natasha' },
      { id: 5, name: 'Kolya' },
   ],
   posts: [
      { id: 1, message: 'Hi! How are you?' },
      { id: 2, message: 'Hi! My first comment' },
   ],
   profile: {
      id: null,
      name: null,
      email: null,
      photos: {
         cover: null,
         avatar: null,
      },
      status: null,
      location: null,
   },
   pagination: {
      totalUsersCount: 0,
      pageSize: 4,
      currentPage: 1,
   },
   users: {
      usersList: [],
      followingInProgress: [],
   },
}

export default initialState


