import { useNavigate } from 'react-router-dom';
import UseGlobalContextProvider from '../../hooks/useGlobalContextProvider';
import editDate from '../../utils/editDate.jsx';
import './styles.css';

function PostCard({ image, date, title, content, slug }) {

    const navigate = useNavigate();
    const { setSlugData } = UseGlobalContextProvider();

    function LoadPost() {
        setSlugData(slug);
        navigate('/post')
    };

    return (
        <section className='post-list-card'>
            <figure className='post-list-figure'>
                <img src={image} alt="imagem do post" />
            </figure>

            <div className='post-list-info'>
                <article className='post-list-info-data'>
                    <time>Postado em {editDate(date)}</time>
                    <h2>{title}</h2>
                    <h3>{content}</h3>
                </article>
                
                <button className='post-list-button' onClick={() => LoadPost()}>Leia Mais</button>
                
            </div>
        </section>
    );
};

export default PostCard;