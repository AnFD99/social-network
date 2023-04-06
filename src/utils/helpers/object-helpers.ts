import { UserType } from 'models'

export const updateObjectInArray = (
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

export const convertToBase64 = (file: File): Promise<any> => {
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

