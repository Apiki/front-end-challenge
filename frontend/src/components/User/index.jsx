import album from '../../assets/images/sprite-svg/blog.svg';
import useTransformDate from '../../hooks/useTransformDate';

export default function User({
  avatar, name, published, link,
}) {
  const [date] = useTransformDate(published);

  return (
    <section className="c-user">
      <div className="c-user__details">
        <figure className="c-user__avatar">
          <img className="c-user__image" src={avatar} alt="User logo" />
        </figure>
        <div>
          <p
            className="c-user__name"
            dangerouslySetInnerHTML={{ __html: name }}
          />
          <p className="c-user__published">
            Publicado em
            {date}
          </p>
        </div>
      </div>
      <a className="c-user__socials" href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={album}
          alt="Link para blog"
          title={`Ir para blog de ${name}`}
        />
      </a>
    </section>
  );
}
