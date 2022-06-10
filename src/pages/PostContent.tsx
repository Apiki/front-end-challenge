
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { LoadingPage } from '../components/Loadings/LoadingPage'
import { NewsLetter } from '../components/Newsletter'
import { RelatedPostsSection } from '../components/RelatedPostsSection'
import { SlugContent } from '../components/SlugContent'
import { CardContent } from '../interfaces/cardContent'
import { api } from '../utils/apiApiki'
import './css/postContent.css'
import './css/mediaqueries.css'


export default function PostContent() {
    const { slug } = useParams()
    const [slugContent, setSlugContent] = useState<CardContent>()

    useEffect(() => {
        const getSlugContent = async () => {
            const content = await api.fetchPost(slug)
            setSlugContent(content[0])
        }
        getSlugContent()
    }, [slug])


    return (
        <>
            {slugContent ? <div className='container-post-content-page'>
                <Header />
                <div className='post-content-container'>
                    {slugContent && <SlugContent {...slugContent} />}
                    <aside className='newsletter-and-related-post-content-aside-section'>
                        <NewsLetter />
                        <div className='related-post-content-aside-section'>
                            <p className='text-base font-semibold text-backgroundHeader'>Veja também em nosso blog</p>
                            <RelatedPostsSection />
                        </div>
                    </aside>
                </div>

                <Footer />
            </div> : <LoadingPage />}

        </>
    )

}