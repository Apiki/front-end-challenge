import "./index.css"

import { useState, useEffect } from "react"
import { GetPosts, GetTotalPages } from '../../../../services/api'

import convertDate from "../../../../utils/convertDate"

import PostCard from './components/PostCard'
import PostCardLoading from './components/PostCardLoading'
import ButtonShowMore from './components/ButtonShowMore'

const index = () => {

  const [pageToGo, setPageToGo] = useState(1)
  const [actualPage, setActualPage] = useState(1)
  const [totalOfPages, setTotalOfPages] = useState()
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    loadPosts();
    getTotalOfPages()
  }, []);

  const getTotalOfPages = async () => {
    const total = await GetTotalPages()

    setTotalOfPages(total)
  }

  const loadPosts = async () => {
    setActualPage(actualPage + 1)
    const list = await GetPosts(pageToGo);
    setPostsList([...postsList, ...list[0]])

    setPageToGo(pageToGo + 1)
  }

  console.log("totalOfPages :" + totalOfPages)
  console.log("actualPage :" + (actualPage))
  console.log("pageToGo :" + pageToGo)
  console.log("")

  return (
    <div className="body">
      <div className="body__PostCards">
        {
          postsList.map((post, key) => (
            <PostCard
              key={post.id}
              previewImage={post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].source_url : post._embedded["wp:term"][0][0].yoast_head_json.og_image[0].url}
              title={post.title.rendered}
              format={post.format}
              slug={post.slug}
              authorName={post._embedded.author[0].name}
              authorLink={post._embedded.author[0].link}
              commentsAccount={post._embedded.replies ? post._embedded.replies.length : "0"}
              rendered={post.excerpt.rendered}
              slug={post.slug}
              postDate={convertDate(post.modified)}
            />
          ))
        }
        {
          postsList.length === 0 || actualPage != pageToGo ?
            <>
              <PostCardLoading />
              <PostCardLoading />
              <PostCardLoading />
              <PostCardLoading />
              <PostCardLoading />
              <PostCardLoading />
            </>
            :
            ""
        }
      </div>
      {
        pageToGo > totalOfPages ?
          ""
          :
          <ButtonShowMore loadMorePosts={() => loadPosts()} />
      }
    </div>
  )
}

export default index;
