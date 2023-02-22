import React from 'react'
import styles from './MyPosts.module.css'
import { PostItem } from '../../../components/PostItem/PostItem'
import { TextForm } from 'views/components/TextForm/TextForm'
import { connect } from 'react-redux'
import { postsOperations, postsSelectors } from 'store/ducks/posts'

const MyPosts = React.memo(function MyPosts(props) {
   const postsElements = props.posts.map((p) => (
      <PostItem message={p.message} key={p.id} id={p.id} />
   ))

   return (
      <div className={styles.posts}>
         <TextForm
            addText={props.addPost}
            buttonTitle='Create'
            headerTitle='Create new post'
         />
         <div className={styles.posts__items}>
            <h3>Posts</h3>
            {postsElements}
         </div>
      </div>
   )
})


let mapStateToProps = (state) => ({
   posts: postsSelectors.getPosts(state),
})

let mapDispatchToProps = {
   addPost: postsOperations.addPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)


