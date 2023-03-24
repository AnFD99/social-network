import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import { AppStateType } from 'store/store'

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
   id?: number | null
   _id?: number | null
   name: string | null
   email: string | null
   photos: { coverImage: string; avatarImage: string }
   status: string | null
   location: LocationType
}

export type PhotosType = {
   coverImage: string
   avatarImage: string
}

export type LocationType = {
   city: string
   country: string
}

export type ThunkActionType = ThunkAction<
   Promise<void>,
   AppStateType,
   unknown,
   AnyAction
>

export type ResponseUserType = {
   id?: number | null
   _id?: number | null
   name: string | null
   email: string | null
   photos: PhotosType
   status: string | null
   location: LocationType
}
