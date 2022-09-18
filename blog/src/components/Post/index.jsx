import editDate from '../../utils/editDate.jsx';
import './styles.css';
import parse from 'html-react-parser';

function Post({postData}) {
    return(
        <main className='publication-container'>
            <article className='publication-structure'>
                <time className='publication-date'>Postado em {editDate(postData[0]?.date)}</time>

                <h2 className='publication-title'>{postData[0]?.title}</h2>

                <h3 className='publication-description'>{postData[0]?.content}</h3>

                <figure className='publication-figure'>
                    <img src={postData[0]?.image} alt="imagem da publicação" />
                </figure>

                <p className='publication-text'>{parse(postData[0]?.text)}</p>
            </article>
        </main>
    )
};

export default Post;