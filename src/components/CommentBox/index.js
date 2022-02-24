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
  
  return(
    <div className="comment-box">
      <h2>Deixe um comentário</h2>
      <CommentForm addComment={addComment}/>
      <button id="comment-reveal" onClick={() => setShowComments((prevState) => !prevState)}>
        {showComments ? 'Esconder Comentários' : 'Mostrar Comentários'}
      </button>
      <h3>Comentários</h3>
      <h4 className="comment-count">
        {comments.length ? `${comments.length} comentário${comments.length === 1 ? '' : 's'}` : 'Nenhum comentário ainda'}
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
        <input placeholder="Nome" required onChange={({target}) => setAuthor(target.value)} value={author}></input><br />
        <textarea placeholder="Comentário" rows="4" required onChange={({target}) => setComment(target.value)} value={comment}></textarea>
      </div>
      <div className="comment-form-actions">
        <button type="submit">Postar Comentário</button>
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



