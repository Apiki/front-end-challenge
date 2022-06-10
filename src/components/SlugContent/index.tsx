import parser from "html-react-parser"
import { Binoculars } from "phosphor-react"
import { CardContent } from "../../interfaces/cardContent"
import { ApikiProfile } from "../../utils/apikiProfile"
import { parseData } from "../../utils/parseData"
import { BreadCrumb } from "../Breadcrumb"
import apikiLogoHeaderLeft from '../../assets/apikiLogoHeaderContentLeft.svg'
import apikiLogoHeaderRight from '../../assets/apikiLogoHeaderContentRight.svg'
import FacebookIcon from '../../assets/facebook-svg-icon.svg'
import TwitterIcon from '../../assets/twitter-svg-icon.svg'
import GmailIcon from '../../assets/gmail-svg-icon.svg'
import LinkedinIcon from '../../assets/linkedin-svg-icon.svg'
import WhatsappIcon from '../../assets/whatsapp-svg-icon.svg'
import TelegramIcon from '../../assets/telegram-svg-icon.svg'
import './index.css'
import './mediaqueries.css'


export function SlugContent({ _embedded, content, date, excerpt, slug, title, yoast_head_json }: CardContent) {

    return (
        <>
            <div className='post-content-title-section-container-fluid'>
                <div className="container-background">
                    <img className="bg-left" src={apikiLogoHeaderLeft} alt="" />
                    <img className="bg-right" src={apikiLogoHeaderRight} alt="" />

                    <div className='post-content-title-section'>
                        {title && title.rendered ? <h1>{title.rendered}</h1> : 'Titulo não encontrado'}
                        {/*Tratar possiveis erros e fazer imagem padrão */}
                        {yoast_head_json && yoast_head_json.og_image && yoast_head_json.og_image[0].url ? <img loading="lazy" src={yoast_head_json.og_image[0].url} alt="Imagem" /> : 'imagem não encontrada'}
                    </div>
                </div>
            </div>

            <div className="slug-content-section">
                <BreadCrumb home={"ApikiBlog"} categoria={"Desenvolvimento WordPress"} postTitle={title.rendered} slug={slug} />
                <div className="slug-content-subtitle">
                    {parser(excerpt.rendered)}
                </div>
                <div className="postedBy-audioFile-share-content">
                    <div className="postedBy-audioFile">

                        <div className="audio-file">
                            <div className="audio-background">

                            </div>
                        </div>
                        <div className="postedBy">
                            <div className="author-profile">
                                {_embedded && _embedded.author && _embedded.author[0] && _embedded.author[0].avatar_urls && _embedded.author[0].avatar_urls[96] ? <img className="author-img" src={_embedded.author[0].avatar_urls[96]} alt=""></img> : <img className="author-img" src={ApikiProfile.avatar} alt="Blog da Apiki"></img>}
                                {_embedded && <span className="card-name-author">por {_embedded && _embedded.author[0] && _embedded.author[0].name ? _embedded.author[0].name : ApikiProfile.name}</span>}
                            </div>
                            <div className="postedData">
                                <p>Postado dia {date ? <span>{parseData(date)}</span> : <span>{ApikiProfile.data}</span>}
                                    <Binoculars weight='bold' size={12} className='text-cardTitle' />
                                    {yoast_head_json && yoast_head_json.twitter_misc && yoast_head_json.twitter_misc && yoast_head_json.twitter_misc["Est. tempo de leitura"] ? <span>{yoast_head_json.twitter_misc["Est. tempo de leitura"]}</span> : <span>{ApikiProfile.tempoDeLeitura}</span>}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="share-content">
                        <button className="share-button" >
                            <img src={FacebookIcon} alt="compartilhar post no facebook" />
                        </button>
                        <button className="share-button" >
                            <img src={TwitterIcon} alt="compartilhar post no twitter" />
                        </button>
                        <button className="share-button" >
                            <img src={LinkedinIcon} alt="compartilhar post no linkedin" />
                        </button>
                        <button className="share-button" >
                            <img src={TelegramIcon} alt="compartilhar post no telegram" />
                        </button>
                        <button className="share-button" >
                            <img src={GmailIcon} alt="compartilhar post no email" />
                        </button>
                        <button className="share-button" >
                            <img src={WhatsappIcon} alt="compartilhar post no whatsapp" />
                        </button>
                    </div>
                </div>
                <div className="separator-to-content">
                </div>
                <div className="content-rendered">
                    {parser(content.rendered)}
                </div>

            </div>
        </>



    )
}