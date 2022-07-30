import React from 'react';

const Post = ({match}) => {
  const postId = match.params.postId
  return <h2>{postId}</h2>;
};

export default Post;


