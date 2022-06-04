import React, { useContext } from "react"
import { PagesPostsContext } from "../../providers/pagesPosts"

const LandingPage = () => {
    const {posts, loadMore, isLoading} = useContext(PagesPostsContext)
    

    return (
            <>
                <h1>LANDING PAGE</h1>
                {posts.map((post) => {
                return(
                    <div key={post.id}>
                        <h3>{post.title.rendered}</h3>
                        <span> Saiba mais</span>
                    </div>
                )
                })}
                {isLoading&& <p>loading...</p>}
                <button onClick={loadMore}>Carregar mais</button>
            </>
    )
}

export default LandingPage