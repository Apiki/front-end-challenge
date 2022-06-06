import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Post({ image, title }) {
  return (
    <article className="c-post">
      <figure className="c-post__figure">
        <LazyLoadImage
          className="c-post__image"
          alt={title}
          title={title}
          effect="blur"
          src={image}
        />
      </figure>
      <h3
        className="c-post__title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </article>
  );
}
