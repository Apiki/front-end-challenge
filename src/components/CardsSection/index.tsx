import { UseAPI } from '../../contexts/apiContext'
import { BlogCard } from '../Cards/BlogCard/BlogCard'
import './index.css'
import './mediaqueries.css'


export function CardsSection() {
    const { cards } = UseAPI()

    return (

        <div className="container-content">
            <div className="cards-container">
                {cards.map(content => {
                    return <BlogCard {...content} key={content.id} />
                })
                }
            </div>
        </div>
    )
}