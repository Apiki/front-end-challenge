import { CardContainer, CardContent, ImgDiv } from "./styles";


export function Card({ posts }) {

  return (
    <>
      {posts !== undefined && (
        posts.map(post => (
          <CardContainer key={post.id}>
            <ImgDiv>
              <img src={post._embedded["wp:featuredmedia"][0].source_url} alt={post.title.rendered} />
            </ImgDiv>
            <CardContent>
              <h3>{post.title.rendered}</h3>
              <p>{post.yoast_head_json.description}</p>
            </CardContent>
          </CardContainer>
        ))
      )}
    </>
  )
}