import React from 'react'

const PostItem = (props: { message: string, id: number }) => {
   return <div>{props.message}</div>
}

export { PostItem }

