import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
  const {postId} = useParams();
  return (
    <div style={{height:400}}>
        <h1 style={{textAlign:"center"}}>Post {postId}</h1>
    </div>
  )
}

export default Post