import React, { useState } from 'react';
import { CommentImage, ContainerComment, ContainerCommentImage, ContainerCommentInfo } from '../styles/ArticleDetail';

const Comment = ({img_src, author_name, content, children}) => {
  const [toggle, setToggle] = useState(false)
  return (
  <ContainerComment>
    <ContainerCommentImage>
      <CommentImage src={img_src} />
    </ContainerCommentImage>
    <ContainerCommentInfo>
      <p>{author_name}</p>
      <p dangerouslySetInnerHTML={{__html: content}}/>
      <p className='comments' onClick={() => setToggle(!toggle)}>Comentários: {children.length}</p>
      {toggle && <pre>
        {children.map((comment) =>
          <Comment 
            key={comment.id}
            img_src={comment.author_avatar}
            author_name={comment.author_name}
            content={comment.comment_text}
            children={comment.children}
          />
        )}
      </pre>}
    </ContainerCommentInfo>
  </ContainerComment>)
};

export default Comment;


