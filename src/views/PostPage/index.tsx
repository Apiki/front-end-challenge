import DOMPurify from 'dompurify';
import { usePostPageHook } from './hook';
import { Calendar, Clock, User } from 'lucide-react';
import { SpinnerComponent } from '../home/components/Spinner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeaderPostComponet } from './components/headerPost';
import { PostFooterComponent } from './components/footer';

export const PostPage = () => {
    const hook = usePostPageHook();



    if (hook.isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center">
                <div className="flex flex-col items-center space-y-4">
                    <SpinnerComponent />
                    <p className="text-zinc-400">Carregando post...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
            {hook.data?.map(post => {
                const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                const cleanContent = DOMPurify.sanitize(post.content?.rendered || "");
                const cleanExcerpt = DOMPurify.sanitize(post.excerpt?.rendered || "");
                const metaDescription = hook.extractTextFromHTML(cleanExcerpt || cleanContent).substring(0, 160);



                return (
                    <article key={post.id}>

                        <title>{post.title?.rendered} | Seu Blog</title>
                        <meta name="description" content={metaDescription} />
                        <meta property="og:title" content={post.title.rendered} />
                        <meta property="og:description" content={metaDescription} />
                        <meta property="og:image" content={featuredImage} />
                        <meta property="og:type" content="article" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content={post.title.rendered} />
                        <meta name="twitter:description" content={metaDescription} />
                        <meta name="twitter:image" content={featuredImage} />
                        <link rel="canonical" href={window.location.href} />



                        <header className="relative">
                            {featuredImage && (
                                <HeaderPostComponet
                                    featuredImage={featuredImage}
                                />

                            )}
                        </header>


                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                            <div className={`${featuredImage ? '-mt-32' : 'pt-12'} relative z-10 pb-8`}>
                                <Card className="bg-zinc-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-zinc-700/50">

                                    <CardHeader>

                                        <CardTitle
                                            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white leading-tight"
                                            dangerouslySetInnerHTML={{ __html: post.title?.rendered }}
                                        />


                                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-zinc-400 mb-6 pb-6 border-b border-zinc-700">
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4 text-yellow-apiki" />
                                                <span>{post.yoast_head_json.author || 'Autor'}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-yellow-apiki" />
                                                <time dateTime={post.date.toLocaleString()}> {new Date(post.date).toLocaleDateString('pt-BR')}</time>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-yellow-apiki" />
                                                <span>{post.yoast_head_json?.twitter_misc?.['Est. tempo de leitura']}  de leitura</span>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    {cleanExcerpt && (

                                        <CardContent
                                            className="text-lg text-zinc-300 mb-8 leading-relaxed italic border-l-4 border-yellow-apiki pl-4"
                                            dangerouslySetInnerHTML={{ __html: cleanExcerpt }}
                                        />
                                    )}

                                </Card>
                            </div>


                            <div className="pb-16">
                                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-zinc-700/30">
                                    <div
                                        className="prose prose-invert prose-lg max-w-none
                             prose-headings:text-white prose-headings:font-bold prose-headings:scroll-mt-20
                             prose-h1:text-2xl prose-h1:mb-4 prose-h1:mt-8 sm:prose-h1:text-3xl
                             prose-h2:text-xl prose-h2:mb-3 prose-h2:mt-6 sm:prose-h2:text-2xl
                             prose-h3:text-lg prose-h3:mb-2 prose-h3:mt-5 sm:prose-h3:text-xl
                             prose-h4:text-base prose-h4:mb-2 prose-h4:mt-4 sm:prose-h4:text-lg
                             prose-p:mb-4 prose-p:leading-relaxed prose-p:text-zinc-200 prose-p:text-base sm:prose-p:text-lg
                             prose-a:text-blue-400 prose-a:hover:text-blue-300 prose-a:transition-colors prose-a:duration-200
                             prose-strong:text-white prose-strong:font-semibold
                             prose-em:text-zinc-300 prose-em:italic
                             prose-ul:mb-4 prose-ul:pl-4 sm:prose-ul:pl-6
                             prose-ol:mb-4 prose-ol:pl-4 sm:prose-ol:pl-6
                             prose-li:mb-1 prose-li:text-zinc-200 prose-li:leading-relaxed
                             prose-blockquote:border-l-4 prose-blockquote:border-blue-500 
                             prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:italic 
                             prose-blockquote:text-zinc-300 prose-blockquote:bg-zinc-900/30 prose-blockquote:rounded-r-lg
                             prose-code:bg-zinc-700 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                             prose-pre:bg-zinc-900 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:border prose-pre:border-zinc-700
                             prose-img:rounded-xl prose-img:shadow-2xl prose-img:border prose-img:border-zinc-700/50
                             prose-hr:border-zinc-600 prose-hr:my-8
                             prose-table:border-collapse prose-table:border prose-table:border-zinc-600
                             prose-th:border prose-th:border-zinc-600 prose-th:bg-zinc-700 prose-th:p-3
                             prose-td:border prose-td:border-zinc-600 prose-td:p-3"
                                        dangerouslySetInnerHTML={{ __html: (post.content?.rendered) }}
                                    />
                                </div>


                            </div>
                        </div>
                         <PostFooterComponent/>
                    </article>

                   
                );
            })}
        </div>
    );
};