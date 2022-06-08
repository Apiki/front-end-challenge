import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PostInternalContext } from "../../providers/postInternal"
import { CardContainer } from "./styles"
import { Button} from "ui-neumorphism"
import 'ui-neumorphism/dist/index.css'

const CardPost = ({post}) => {
    const { fullPost, setPostSlug} = useContext(PostInternalContext)
    const navigate = useNavigate()
    console.log(post["_embedded"]["wp:featuredmedia"])

    const handleClickPost = (slug) => {
        setPostSlug(slug)
        fullPost(slug)        
        navigate('/post')
    }
    return(
        <CardContainer> 
            <figure>
                {post["_embedded"]["wp:featuredmedia"] &&
                    <img     
                    src={post["_embedded"]["wp:featuredmedia"][0].source_url || ''} 
                    alt='' 
                    />
                } 
            </figure>
            <h3 >{post.title.rendered}</h3>            
            <Button onClick={() => handleClickPost(post.slug)}>Saiba mais</Button>
        </CardContainer>
    )
} 


export default CardPost

