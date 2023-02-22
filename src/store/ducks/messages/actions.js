import types from "./types"

export const sendMessage = (messageText) => ({
   type: types.SEND_MESSAGE,
   messageText,
})

