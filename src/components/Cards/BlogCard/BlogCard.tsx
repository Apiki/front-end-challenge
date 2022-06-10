import { Link } from "react-router-dom";
import parser from 'html-react-parser'
import { Binoculars, PaperPlaneRight } from "phosphor-react";
import { parseData } from "../../../utils/parseData";
import { ApikiProfile } from "../../../utils/apikiProfile";
import { CardContent } from "../../../interfaces/cardContent";
import { useEffect, useState } from "react";
import './blogCard.css'
import './mediaqueries.css'

export function BlogCard({ id, date, slug, title, excerpt, _embedded, yoast_head_json }: CardContent) {

    const [avatarAuthor, setAvatarAuthor] = useState<string>()
    /*Criação dos cards com slug para para o conteúdo*/

    /*Previnindo erros */
    useEffect(() => {
        _embedded.author[0].avatar_urls ? setAvatarAuthor(_embedded.author[0].avatar_urls[96]) : setAvatarAuthor(ApikiProfile.avatar)
    }, [id])

    return (
        <div className="card" key={id ? id : ApikiProfile.id}>
            <Link to={slug ? slug : '/'} className='card-wrapper'>
                <div className="card-img-wrapper">
                    {/*Verificar se tem o caminho para então mostrar  a foto, tratar o erro com imagem diferenciada, se der tempo*/}
                    {_embedded && <img loading="lazy" src={_embedded && _embedded["wp:featuredmedia"] && _embedded["wp:featuredmedia"][0] && _embedded["wp:featuredmedia"][0].media_details && _embedded["wp:featuredmedia"][0].media_details.sizes && _embedded["wp:featuredmedia"][0].media_details.sizes["jnews-750x375"] && _embedded["wp:featuredmedia"][0].media_details.sizes["jnews-750x375"].source_url ? _embedded["wp:featuredmedia"][0].media_details.sizes["jnews-750x375"].source_url : ApikiProfile.postImage} alt={_embedded && _embedded["wp:featuredmedia"] && _embedded["wp:featuredmedia"][0] && _embedded["wp:featuredmedia"][0].alt_text ? _embedded["wp:featuredmedia"][0].alt_text : ApikiProfile.postImageAlternativeText} />}
                </div>

                <div className="card-content">

                    <h1 className="card-title">{title ? title.rendered : 'Título não disponível'}</h1>

                    <div className="card-subtitle">{excerpt ? parser(excerpt.rendered) : 'Subtítulo não disponível'}</div>

                    <div className="card-bottom flex flex-row justify-between items-center">
                        <div className="flex gap-2">
                            {_embedded && <img className="card-avatar-author" loading="lazy"
                                src={avatarAuthor}
                                alt="" />}
                            <div className="flex flex-col gap-1 justify-center">
                                {_embedded && <span className="card-name-author">{_embedded && _embedded.author[0] && _embedded.author[0].name ? _embedded.author[0].name : ApikiProfile.name}</span>}
                                <div className="flex items-center gap-2">
                                    <span className="card-data-post">{date ? parseData(date) : ApikiProfile.data}</span>
                                    <Binoculars weight='bold' size={12} className='text-cardTitle' />
                                    <p className="card-reading-time">{yoast_head_json ? yoast_head_json.twitter_misc["Est. tempo de leitura"] : ApikiProfile.tempoDeLeitura}</p>
                                </div>
                            </div>
                        </div>
                        <Link to={slug ? slug : '/'}><PaperPlaneRight size={40} weight={"light"} className='btn-read-post text-cardTitle opacity-90 ' /></Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

