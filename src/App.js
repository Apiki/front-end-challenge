import React from 'react';
import './App.css';
import './global.css';

//Função para criar a seção com os 10 ultimos posts da api
function faz_blog() {
  //Função que consome a api
  async function consuta_ultimos() {
    try {
        //Constante que recebe o array dos ultimos post
        const response = await fetch('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
        //Constante que transforma em formato JSON
        const data = await response.json()
        //console.log(data)
        escreve(data)
    } catch (error) {
        console.log(error)
    }
  }
  consuta_ultimos();
  
  //Função que vai escrever no HTML
  function escreve(blog) {
    for (let contador = 0; contador <= 9; contador++) {

      //Estas constantes mostram onde o conteudo deve ser escrito
      const localImg = document.getElementById(`img-ult${contador}`)
      const localLink = document.getElementById(`link-ult${contador}`)
      const localtitulo = document.getElementById(`link-ult${contador}`)
      const localEscritor = document.getElementById(`escritor${contador}`)
      const linkEscritor = document.getElementById(`link-escritor${contador}`)
      const localConteudo = document.getElementById(`conteudo${contador}`)

      //Estas variaveis coleta as propriedades da api
      var image = blog[contador]._embedded["wp:featuredmedia"][0].source_url
      var Links = blog[contador].link
      var title = blog[contador].title.rendered
      var escritor = blog[contador]._embedded.author[0].name
      var conteudo = blog[contador].excerpt.rendered
      var lEscritor = blog[contador]._embedded.author[0].link
  
      //E nesta parte elas escrevem o conteude em seu lugar
      localImg.setAttribute('src', image)
      localLink.setAttribute("href", Links)
      localtitulo.innerHTML = `<h2>${title.replaceAll('-', ' ')}</h2>`
      localEscritor.innerHTML = `<strong>${escritor}</strong>`
      localConteudo.innerHTML = conteudo
      linkEscritor.setAttribute("href", lEscritor)
      
    }
    
  }
}
faz_blog();


function App() {
  return (    
    <div className="App">


      <header>
          <img id="logo" src="https://cdn.blog.apiki.com/wp-content/uploads/sites/2/2020/04/marca-apiki-blog-h552-e1595420262681.png" alt="logo-do-blog"></img>
          
      </header>


      <div id="dev">
        <p>Inicio&gt;Desenvolvimento WordPress</p>
        <h1>Desenvolvimento WordPress </h1>
        <p>Desenvolva seu negócio, desenvolvendo com WordPress.</p>
      </div>


      <section>

        <div className="ultimos">
          <img id="img-ult0" src="" alt="Imagem-do-blog0"></img>

          <div className="content">
            <a id="link-ult0" href="."></a>
            <a href="." id="link-escritor0" ><span id="escritor0" ></span></a>
            <p id="conteudo0" ></p>
          </div>

        </div>

        <div className="ultimos">
        <img id="img-ult1" src="" alt="Imagem-do-blog1"></img>

        <div className="content">
            <a id="link-ult1" href="."></a>
            <a href="." id="link-escritor1"><span id="escritor1"></span></a>
            <p id="conteudo1"></p>
          </div>

        </div>

        <div className="ultimos">
          <img id="img-ult2" src="" alt="Imagem-do-blog2"></img>

          <div className="content">
            <a href="." id="link-ult2"></a>
            <a href="." id="link-escritor2"><span id="escritor2"></span></a>
            <p id="conteudo2"></p>
          </div>

        </div>

        <div className="ultimos">
        <img id="img-ult3" src="" alt="Imagem-do-blog3"></img>

        <div className="content">
            <a id="link-ult3" href="."></a>
            <a href="." id="link-escritor3"><span id="escritor3"></span></a>
            <p id="conteudo3"></p>
          </div>

        </div>

        <div className="ultimos">
        <img id="img-ult4" src="" alt="Imagem-do-blog4"></img>

        <div className="content">
            <a id="link-ult4" href=""></a>
            <a href="." id="link-escritor4"><span id="escritor4"></span></a>
            <p id="conteudo4"></p>
          </div>

        </div>

        <div className="ultimos">
        <img id="img-ult5" src="" alt="Imagem-do-blog4"></img>

        <div className="content">
            <a id="link-ult5" href="."></a>
            <a href="." id="link-escritor5"><span id="escritor5"></span></a>
            <p id="conteudo5"></p>
          </div>

        </div>

        <div className="ultimos">
        <img id="img-ult6" src="" alt="Imagem-do-blog6"></img>

        <div className="content">
            <a id="link-ult6" href="."></a>
            <a href="." id="link-escritor6"><span id="escritor6"></span></a>
            <p id="conteudo6"></p>
          </div>

        </div>

        <div className="ultimos">
          <img id="img-ult7" src="" alt="Imagem-do-blog7"></img>

          <div className="content">
            <a id="link-ult7" href="."></a>
            <a href="." id="link-escritor7"><span id="escritor7"></span></a>
            <p id="conteudo7"></p>
          </div>

        </div>

        <div className="ultimos">
          <img id="img-ult8" src="" alt="Imagem-do-blog8"></img>

          <div className="content">
            <a id="link-ult8" href="."></a>
            <a href="." id="link-escritor8"><span id="escritor8"></span></a>
            <p id="conteudo8"></p>
          </div>

        </div>

        <div className="ultimos" id="recentes9">
          <img id="img-ult9" src="" alt="Imagem-do-blog9"></img>
          
          <div className="content">
            <a id="link-ult9" href="."></a>
            <a href="." id="link-escritor9"><span id="escritor9"></span></a>
            <p id="conteudo9"></p>
          </div>

        </div>


      </section>

      <footer>
        <ul>
          <li><a href="https://www.facebook.com/ApikiWordPress">Facebook</a></li>
          <li><a href="https://www.linkedin.com/company/apiki">Linkedin</a></li>
          <li><a href="https://www.instagram.com/apikiwordpress/">instagram</a></li>
          <li><a href="https://twitter.com/apikiWordPress">Twitter</a></li>
          <li><a href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA">Youtube</a></li>
          <li><a href="https://github.com/Apiki">Github</a></li>
        </ul>
      </footer>
      
    </div>
  );
}

export default App;

