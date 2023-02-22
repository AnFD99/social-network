/* eslint-disable import/no-anonymous-default-export */
const updateObjectInArray = (items, itemId, objPropName, newObjProp) => {
   return items.map((u) => {
      if (u[objPropName] === itemId) {
         return { ...u, ...newObjProp }
      }
      return u
   })
}

const convertToBase64 = (file) => {
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



