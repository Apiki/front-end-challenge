import './Newsletter.css';

export default function Newsletter () {
  return (
    <div className='news'>
      <h2 className='news__title'>
        Receba no seu e-mail uma série de 
        conteúdos sobre Infra para WordPress.
      </h2>

      <a href='https://blog.apiki.com/newsletter/' target='_blank' rel="noreferrer" title='Cadastrar E-Mail' className="btn news__btn">
        Cadastrar E-mail
      </a>
    </div>
  )
}