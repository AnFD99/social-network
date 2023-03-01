const initialState = {
   auth: { user: null as AuthUserType, isAuth: false },
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
   ] as MessageType[],
   dialogs: [
      { id: 1, name: 'Dmitry' },
      { id: 2, name: 'Masha' },
      { id: 3, name: 'Vova' },
      { id: 4, name: 'Natasha' },
      { id: 5, name: 'Kolya' },
   ] as DialogType[],
   posts: [
      { id: 1, post: 'Hi! How are you?' },
      { id: 2, post: 'Hi! My first comment' },
   ] as PostType[],
   profile: {
      id: null as number | null,
      name: null as string | null,
      email: null as string | null,
      photos: { cover: null as string | null, avatar: null as string | null },
      status: null as string | null,
      location: null as LocationType | null,
   },
   pagination: {
      totalUsersCount: 0,
      pageSize: 4,
      currentPage: 1,
   },
   users: {
      usersList: [] as UserType[],
      followingInProgress: [] as number[],
   },
}

export const InitialStateType = typeof initialState

type AuthUserType = {
   id: string
   email: string
   name: string
}

type MessageType = {
   id: number
   message: string
}

type DialogType = {
   id: number
   name: string
}

type PostType = {
   id: number
   post: string
}

type UserType = {
   id: number | null
   name: string | null
   email: string | null
   photos: PhotosType
   status: string | null
   location: LocationType
}

type PhotosType = {
   cover: string
   avatar: string
}

type LocationType = {
   city: string
   country: string
}

export default initialState
