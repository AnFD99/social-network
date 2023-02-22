import { instanceAPI } from './api'

const usersAPI = {
   getUsersList(currentPage = 1, pageSize = 4) {
      return instanceAPI.get(`users?page=${currentPage}&size=${pageSize}`)
   },
   setFollow(id) {
      // return instance.patch(`users/${id}`, {
      //    followed: true,
      // })
   },
   setUnfollow(id) {
      // return instance.patch(`users/${id}`, {
      //    followed: false,
      // })
   },
}



export default usersAPI