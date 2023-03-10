import { UserType } from 'models'
import { instanceAPI } from './api'

const usersAPI = {
   getUsersList(currentPage = 1, pageSize = 4) {
      return instanceAPI.get<UserType[]>(`users?page=${currentPage}&size=${pageSize}`)
   },
   setFollow(id: string | number) {
      // return instance.patch(`users/${id}`, {
      //    followed: true,
      // })
   },
   setUnfollow(id: string | number) {
      // return instance.patch(`users/${id}`, {
      //    followed: false,
      // })
   },
}




export default usersAPI