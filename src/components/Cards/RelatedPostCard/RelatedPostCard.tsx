import { Link } from "react-router-dom";
import './relatedPostCard.css'


export const RelatedPostCard: React.FC = () => {
    return (

        <div className="related-post-card">
            <Link to={'/'}>
                <div className="related-post-card-content">


                </div>
            </Link>
        </div>
    )
}