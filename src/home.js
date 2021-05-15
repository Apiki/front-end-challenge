import './style.scss';

function Home() {
  return (
    <>
      <header className="Header">
        <div className="container">
          <figure>
            <img src="https://picsum.photos/200/80" alt="imagens"/>
          </figure>
          <nav>
              <ul>
                <li><a href="#">WEB STORIES</a></li>
                <li><a href="#">DESENVOLVIMENTO</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">SEGURANÇA</a></li>
              </ul>
          </nav>
        </div>
      </header>
      <div className="container">
        <div className="List">
          <div className="CardList">
            <figure>
              <img src="https://picsum.photos/350/200"/>
            </figure>
            <h2>3gy54hyh5y5y5yb4</h2>
            <span className="Meta">
              <cite>Leandro Vieira</cite>
              <time>13 de agosto de 2020</time>
            </span>
          </div>
        </div>
      </div>
      <div className="Box-button">
        <button>Carregar mais</button>
      </div>
      <footer className="Footer">
        swsws
      </footer>
    </>
  );
}

export default Home;
