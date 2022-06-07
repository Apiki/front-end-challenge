import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import CardPost from "../../components/card"
import { PagesPostsContext } from "../../providers/pagesPosts"
import { PostInternalContext } from "../../providers/postInternal"
import { ContainerPage } from "./styles"

const LandingPage = () => {
    const {posts, loadMore, isLoading} = useContext(PagesPostsContext)
    
    return (
            <ContainerPage>
                <h1>LANDING PAGE</h1>
                <div className="container__cards">
                    {posts.map((post) => {
                    return(
                        <CardPost post={post} key={post.id}/>
                    )
                    })}
                    {isLoading&& <p>loading...</p>}
                </div>
                <button onClick={loadMore}>Carregar mais</button>
            </ContainerPage>
    )
}

export default LandingPage