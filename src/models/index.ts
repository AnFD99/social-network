export type AuthUserType = {
   id: string
   email: string
   name: string
}

export type MessageType = {
   id: number
   message: string
}

export type DialogType = {
   id: number
   name: string
}

export type PostType = {
   id: number
   post: string
}

export type UserType = {
   id: number | null
   name: string | null
   email: string | null
   photos: PhotosType
   status: string | null
   location: LocationType
}

export type PhotosType = {
   cover: string
   avatar: string
}

export type LocationType = {
   city: string
   country: string
}
