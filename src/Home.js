 
/*
 * @name Home / Página Inicial do Blog
 * @author Anderson Daniel Lima do Nascimento <andersondanieln@gmail.com>
 */
import './layout/style.css';
import {useState, useEffect} from 'react';

// Seguindo o princípio de separação das responsabilidades
// e mantendo tudo mais organizado, reutilizável e estruturado.

import Header from './layout/Header';
import Articles from './layout/Articles';
import ArticlesList from './layout/ArticlesList';
import {DisplayLoading, DisplayNoPages} from './layout/Display';
import GoToTop from './layout/GoToTop';
import loadArticles from './layout/loadArticles';
import MoreArticles from './layout/MoreArticles';
import FilterContent from './layout/FilterContent';


function Home() {

  let [articlesData, setArticlesData]   = useState([]);
  let [isLoading, setIsLoading]         = useState(false);
  let [lastPage, setLastPage]           = useState(1);
  let [maxPage, setMaxPage]             = useState(1);
  let [noMorePages, setNoMorePages]     = useState(false);
  let [hasDateFilter, setHasDateFilter] = useState(false);
  let [dateFilter, setDateFilter]       = useState('');

  useEffect(()=>{
      loadContent();
      
  }, []);
 
  // Adiciona filtragem por data
  function addDateFilter(){

           let datePicker = document.getElementById('date-filter').value;
           let date       = new Date(datePicker).toLocaleDateString('pt-br');
           if(date == 'Invalid Date')
           return; 

           setHasDateFilter(true);
           setDateFilter(date);
  }
  // Remove filtragem por data
  function removeDateFilter(){
           setHasDateFilter(false);
           setDateFilter('');
  }
  function loadContent(){
    (async ()=>{

     // Incrementa e define a última página
     setLastPage(lastPage+1);
     // Diz que há um carregamento para que a animação de loading fique visível
     setIsLoading(true);
     // Compara se não há paginação, ou se é a primeira página
     if(maxPage === 1 && lastPage === 1){
     // Se for, carrega as postagens da primeira página
      let articles = await loadArticles(1);
     // Como o num. máx. de páginas vem no Headers da requisição,
     // já aproveito para buscar essa informação e salvar em um estado.
      setMaxPage(articles[0].max_page);
     // Guardo os dados das postagens
      setArticlesData(articles);
     }else if(lastPage <= maxPage){
      // Se for uma paginação, carregue com base na incrementação da última página
      let articles = await loadArticles(lastPage);
      // Como a paginação é dinâmica e o conteúdo da página anterior continua
      // visível, então só adicionamos o novo conteúdo ao array
          articles.map(article=>articlesData.push(article));
     }else{
      // Se passar do número máx. de páginas...
      setNoMorePages(true);
     }
     // Remove a animação de loading após carregar e mostrar as informações.
     setIsLoading(false);
     })();
  }
  return (
        <div>
          <Header/>
          <Articles>
           <FilterContent addClick={addDateFilter} removeClick={removeDateFilter}/>
           <ArticlesList list={
              hasDateFilter ? 
              articlesData.filter(article =>{
                  // Não é um artigo
                  if(article.max_page) return; 
                  // Pegamos a data do artigo, limpamos e convertemos
                  let articleDate = new Date(article.date.split(' ')[0]);
                  // Data proviniente do filtro
                  let date        = new Date(dateFilter);
                  // Comparamos se o post é mais antigo ou até a data do filtro
                  if(articleDate.getTime() <= date.getTime())
                  return true;

              }) :
              articlesData
           }/>
           {isLoading   ? <DisplayLoading/> : ''}
           {noMorePages ? <DisplayNoPages/> : ''}
           <MoreArticles onClick={loadContent}/>
          </Articles>
          <GoToTop/>
        </div>
  );
}

export default Home;
