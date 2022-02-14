import "./index.css"

import { useState, useEffect } from "react"
import { GetPosts } from '../../../../services/api'

import convertDate from "../../../../utils/convertDate"

import PostCard from './components/PostCard'
import PostCardLoading from './components/PostCardLoading'
import ButtonShowMore from './components/ButtonShowMore'

const index = () => {

  const [page, setPage] = useState(1)
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    loadPosts();

  }, []);

  const loadPosts = async () => {
    const list = await GetPosts(page);
    setPostsList([...postsList, ...list[0]])

    setPage(page + 1)
  }

  console.log(postsList)

  return (
    <div className="body">
      <div className="body__PostCards">
        {
          postsList.map((post, key) => (
            <PostCard
              key={key}
              previewImage={post._embedded["wp:featuredmedia"][0].source_url}
              title={post.title.rendered}
              description={post.yoast_head_json.description}
              format={post.format}
              slug={post.slug}
              authorName={post._embedded.author[0].name}
              authorLink={post._embedded.author[0].link}
              commentsAccount={post._embedded.replies ? post._embedded.replies.length : "0"}
              rendered={post.excerpt.rendered}
              slug={post.slug}
              link={post.link}
              postDate={convertDate(post.modified)}
            />
          ))
        }
        {
          postsList.length === 0 ?
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
      <ButtonShowMore loadMorePosts={() => loadPosts()} />
    </div>
  )
}

export default index;
