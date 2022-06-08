import React, { useContext } from "react"
import { Button, ProgressCircular } from "ui-neumorphism"
import CardPost from "../../components/card"
import { PagesPostsContext } from "../../providers/pagesPosts"
import { ContainerPage } from "./styles"

const LandingPage = () => {
    const {posts, loadMore, isLoading} = useContext(PagesPostsContext)
    
    return (
            <ContainerPage>
                <div className="container__cards">
                    {posts.map((post) => {
                    return(
                        <CardPost post={post} key={post.id}/>
                    )
                    })}                    
                </div>
                {isLoading&& 
                    <ProgressCircular indeterminate size={36} width={4} color='var(--primary)' />
                }
                <Button onClick={loadMore}>Carregar mais</Button>
            </ContainerPage>
    )
}

export default LandingPage