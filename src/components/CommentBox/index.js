import { useState } from 'react';
import "./style.scss"

export const CommentBox = () => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const addComment = ({author, comment}) => {
    setComments((prevComments) => [...prevComments, { id: prevComments.length + 1, author, comment }]);
  }

  const removeComment = (id) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
  }
  
  console.log(comments)
  return(
    <div className="comment-box">
      <h2>Join the Discussion!</h2>
      <CommentForm addComment={addComment}/>
      <button id="comment-reveal" onClick={() => setShowComments((prevState) => !prevState)}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      <h3>Comments</h3>
      <h4 className="comment-count">
        {comments.length ? `${comments.length} comment${comments.length === 1 ? '' : 's'}` : 'No comments yet'}
      </h4>
      {showComments && (
        <div className="comment-list">
          {comments.map((comment) => <Comment 
            author={comment.author} 
            body={comment.comment} 
            id={comment.id}
            removeComment={removeComment}
          />)}
        </div>
      )}
    </div>  
  )
}

const CommentForm = ({addComment}) => {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  

  const handleCommentSubmit = ({author, comment, event}) => {
    event.preventDefault();
    addComment({author, comment});
  }

  return (
    <form className="comment-form" onSubmit={(event) => handleCommentSubmit({author, comment, event})}>
      <div className="comment-form-fields">
        <input placeholder="Name" required onChange={({target}) => setAuthor(target.value)} value={author}></input><br />
        <textarea placeholder="Comment" rows="4" required onChange={({target}) => setComment(target.value)} value={comment}></textarea>
      </div>
      <div className="comment-form-actions">
        <button type="submit">Post Comment</button>
      </div>
    </form>
  );
}

const Comment = ({author, body, id}) => {

  return(
    <div className="comment" key={id}>
      <p className="comment-header">{author}</p>
      <p className="comment-body">- {body}</p>
    </div>
  );
}



