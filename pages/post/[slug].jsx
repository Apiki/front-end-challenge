import Head from 'next/head';
import HTMLReactParser from "html-react-parser";

import { Default } from '../../themes/Default';
import { getPostDetails } from '../../services/posts';
import { Error } from '../../components/Error';
import { formateDate, handleSingleFeaturedImage } from '../../utils/helpers';

const Post = ({data, err}) => {    
    return (
        <>
            <Head>
      
                {
                    data?.yoast_head ? (
                        HTMLReactParser(data.yoast_head)
                    ) : (
                        <>
                            <title>Ops, Ocorreu um erro no carregamento</title>
                            <meta name="description" content="Ocorreu um erro no carregamento" />
                            <link rel="icon" href="/favicon.ico" />
                        </>
                    )
                }
            </Head>

            <Default>
                <section className="single">
                    <div className="container">
                        {!err ? (
                                <div className="post-content">
                                    <div className="post-infos mb-15">
                                        <h1 className="post-title mb-15">
                                            {data?.title?.rendered}
                                        </h1>
                                        <div className='post-excerpt mb-15' dangerouslySetInnerHTML={{__html: data?.excerpt?.rendered}}></div>
                    
                                        <small className='post-date'>
                                            Escrito por {data._embedded.author[0].name} em {formateDate(data?.date)}
                                        </small>
                                    </div>
                                    {
                                        handleSingleFeaturedImage(data)?.length > 0 && (
                                            <figure className="post-featured-image mb-15">
                                                <img
                                                    src={handleSingleFeaturedImage(data)}
                                                    alt={data?.title?.rendered}
                                                    loading="lazy"
                                                />
                                            </figure>
                                        )
                                    }
                                    <div className="post-text" dangerouslySetInnerHTML={{__html: data?.content?.rendered}}></div>
                                        {
                                            data._embedded["wp:term"].length > 0 && (
                                                <div className="taxonomy">
                                                    <span>Categorias e Tags: </span>

                                                    <ul className='list-taxonomies'>
                                                        {
                                                            data._embedded["wp:term"].map((el, i) => el[0]?.name && (<li key={`taxonomy-${i}`}>{el[0]?.name}</li>))
                                                        }
                                                    </ul>
                                                </div>
                                            )
                                        }
                                </div>
                            ) : <Error />
                        }
                    </div>
                </section>    
            </Default>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const { slug } = context.params;

    try {
        let {data} = await getPostDetails(slug);

        if(data) {
            return {
                props: {
                    data: data[0]
                }
            }
        }
    }   catch (e) {
        console.log(e);

        return {
            props: {
                err: true
            }
        }
    }
}
  
  
  

export default Post;