import { sectionTitle } from '../../interfaces/sectionTitle'
import { BreadCrumb } from '../Breadcrumb'
import { ButtonNextPage } from '../Buttons/buttonNextPage'
import { CardsSection } from '../CardsSection'
import { RelatedPostsSection } from '../RelatedPostsSection'
import { SectionTitle } from '../SectionTitle'
import './index.css'
import './mediaqueries.css'

export function HomeMainContent() {

    const sectionTitle: sectionTitle = {
        title: 'Últimos Posts'
    }

    return (
        <div className='container-main-content-fluid'>
            <div className='container-main-content'>
                <header className='title-main-content'>
                    <BreadCrumb home={'ApikiBlog'} categoria={'Desenvolvimento WordPress'} />
                    <SectionTitle {...sectionTitle} />
                </header>
                <main className='home-main-content'>
                    <CardsSection />
                    <RelatedPostsSection />
                </main>
                <ButtonNextPage />
            </div>
        </div>
    )
}