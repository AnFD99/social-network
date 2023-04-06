import { LocationType } from 'models'

export interface IProfileResponse {
   _id: string
   name: string | null
   email: string | null
   coverImage: string
   avatarImage: string
   status: string | null
   location: LocationType | null
}

export interface IStatusResponse {
   status: string
}

export interface IPhotoResponse {
   coverImage: string
}
