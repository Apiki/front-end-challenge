import Article from './Article';

function Articles(props){
    return (
     <main id="content-wrapper">

     <section id="articles-wrapper">
     
         {
           !props.children ? <h1 className="text-center">Não há postagens.</h1> : props.children
         }
     </section>
 
 </main>

    );
}
export default Articles;