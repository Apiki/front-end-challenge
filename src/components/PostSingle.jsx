import parse from 'html-react-parser';
import './PostSingle.css';

export default function Post ({img, title, author, authorAvatar, date, content, slug}) {
  return (
    <article className="post">
      <div className='post__cover'>
        <img src={img} alt={title} className='post__cover-img'/>
      </div>
      <div className='post__content'>

        <div className='post__info'>
          <div className='post__info-img'></div>
          <div>
            <span className='post__info-author'>
              {author}
            </span>
            <span className='post__info-date'>
              {date}
            </span>
          </div>
        </div>

        <div className='post__content-data'>
          <h2 className='post__title'>
            {title}
          </h2>

          <div className='post__tags'>
            <a href='https://google.com' className='post__tag'>
              #tag
            </a>
            <a href='https://google.com' className='post__tag'>
              #tag
            </a>
          </div>

          <div className='post__content-text'>
            {parse(content)}
          </div>


          <span className='post__comments'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a5q6hwmc0ql1cst8unte8h9udneclgw2" className="crayons-icon"><title id="a5q6hwmc0ql1cst8unte8h9udneclgw2">Comments</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
            4 cometários
          </span>


        </div>

      </div>
    </article>
  )
}