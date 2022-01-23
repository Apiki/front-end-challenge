import React, { useState, useEffect } from 'react';
import Comment from '../components/Comment';
import services from '../services';
import { ContainerCommentList } from '../styles/ArticleDetail';

const CommentList = ({post}) => {
  const [comments, setComments] = useState([{
    id: 0,
    author_avatar: '',
    author_name: '',
    comment_text: '',
    children: [],
  },])

  const CommentTree = (id, comment_data) => {
    const comment_list = comment_data.filter((comment) => comment.parent === id)
    .map((comment) => 
      ({
        id: comment.id,
        author_avatar: comment.author_avatar_urls[48],
        author_name: comment.author_name,
        comment_text: comment.content.rendered,
        children: CommentTree(comment.id, comment_data)
      })
    )
    return comment_list
  }
  
  useEffect(() => {
    const getCommentList = async () => {
      const comment_data = await  services.getCommentsChildren(post)
      setComments(CommentTree(0, comment_data))
    }
    getCommentList()
  }, [])

  return <ContainerCommentList>
    <h2>Comentários</h2>
    {comments.map((comment) => 
      <Comment 
        key={comment.id}
        img_src={comment.author_avatar}
        author_name={comment.author_name}
        content={comment.comment_text}
        children={comment.children}
      />
    )}
  </ContainerCommentList>;
};

export default CommentList;
