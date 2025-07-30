import { Button } from '@/components/ui/button';
import logo from '../../assets/logo.webp';
import { useHomeHook } from './hook';
import { CardPostComponent } from './components/cardPost';
import { SpinnerComponent } from './components/Spinner';
import { Code, Sparkles } from 'lucide-react';
import { HeroComponet } from './components/hero';
import { HeaderHomeComponent } from './components/headerHome';

export const Home = () => {
  const hook = useHomeHook();

  return (
    <>

      <title>Blog Apiki - Artigos sobre Desenvolvimento e Tecnologia</title>
      <meta
        name="description"
        content="Descubra os melhores artigos sobre desenvolvimento, WordPress, tecnologia e inovação no Blog Apiki. Conteúdo atualizado e relevante para desenvolvedores."
      />
      <meta name="keywords" content="blog, desenvolvimento, wordpress, tecnologia, apiki" />
      <meta property="og:title" content="Blog Apiki - Artigos sobre Desenvolvimento" />
      <meta property="og:description" content="Conteúdo de qualidade sobre desenvolvimento e tecnologia" />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Blog Apiki",
          "description": "Blog sobre desenvolvimento e tecnologia",
          "url": window.location.origin,
          "publisher": {
            "@type": "Organization",
            "name": "Apiki",
            "logo": {
              "@type": "ImageObject",
              "url": `${window.location.origin}${logo}`
            }
          }
        })}
      </script>


      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">


        <HeaderHomeComponent />

        <section className="relative overflow-hidden">
          <HeroComponet />
        </section>


        {hook.isLoading && hook.currentPage === 1 && (
          <div className="flex flex-col items-center justify-center py-20" role="status" aria-label="Carregando posts">
            <SpinnerComponent />
            <p className="text-zinc-400 mt-4 text-lg">Carregando artigos incríveis...</p>
            <span className="sr-only">Carregando posts do blog...</span>
          </div>
        )}


        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {hook.allPosts && hook.allPosts.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Últimos Artigos
                </h3>
                <div className="h-px bg-gradient-to-r from-yellow-apiki to-transparent flex-1 ml-6"></div>
              </div>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                aria-label="Lista de posts do blog"
              >
                {hook.allPosts.map((post, index) => {
                  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0].source_url;

                  return (
                    <article
                      key={post.id}
                      className="group relative bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-zinc-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-apiki/10 hover:border-yellow-apiki/30"
                      itemScope
                      itemType="https://schema.org/BlogPosting"
                    >



                      <CardPostComponent
                        author={post.yoast_head_json?.author}
                        description={post.yoast_head_json?.description}
                        date={post.date}
                        featuredImage={featuredImage}
                        index={index}
                        slug={post.slug}
                        title={post.title.rendered}
                        link={post.link}
                        readingTime={post.yoast_head_json?.twitter_misc?.['Est. tempo de leitura']}
                      />
                    </article>
                  );
                })}
              </div>
            </section>
          )}


          {hook.hasMorePages && (
            <div className="flex justify-center">
              <Button
                type="button"
                onClick={hook.loadMorePosts}
                disabled={hook.isLoadingMore}
                className="group relative cursor-pointer bg-gradient-to-r from-yellow-apiki to-yellow-500 hover:from-yellow-500 hover:to-yellow-apiki text-zinc-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-apiki/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                aria-label="Carregar mais posts do blog"
              >
                {hook.isLoadingMore ? (
                  <div className="flex items-center space-x-3">

                    <span>Carregando mais artigos...</span>
                    <span className="sr-only">Carregando mais posts...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Carregar mais artigos</span>
                    <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                  </div>
                )}
              </Button>
            </div>
          )}


          {!hook.isLoading && (!hook.allPosts || hook.allPosts.length === 0) && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-zinc-800 rounded-full flex items-center justify-center">
                <Code className="w-12 h-12 text-zinc-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Nenhum artigo encontrado
              </h3>
              <p className="text-zinc-400">
                Volte em breve para conferir nossos novos conteúdos!
              </p>
            </div>
          )}
        </main>
      </div>
    </>
  );
};