import "./index.css"

const index = ({
  loadMorePosts
}) => {
  return (
    <button onClick={loadMorePosts} className='button__show__more'>
      Carregar Mais
    </button>
  )
}

export default index