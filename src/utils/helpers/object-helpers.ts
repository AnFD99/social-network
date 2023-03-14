import { UserType } from 'models'

/* eslint-disable import/no-anonymous-default-export */
const updateObjectInArray = (
   items: UserType[],
   itemId: number | string,
   objPropName: string | number,
   newObjProp: { followed: boolean },
) => {
   return items.map((u) => {
      if (u[objPropName] === itemId) {
         return { ...u, ...newObjProp }
      }
      return u
   })
}

const convertToBase64 = (file: Blob) => {
   return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
         resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
         reject(error)
      }
   })
}

export default { updateObjectInArray, convertToBase64 }

