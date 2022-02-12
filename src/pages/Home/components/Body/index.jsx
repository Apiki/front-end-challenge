import "./index.css"

import { useState, useEffect } from "react"
import { GetPosts } from '../../../../services/api'

import convertDate from "../../../../utils/convertDate"

import PostCard from './components/PostCard'

const index = () => {

  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      let list = await GetPosts();
      setPostsList(list[0])
    }

    loadPosts();
  }, []);

  console.log(postsList)

  //{post._embedded["wp:featuredmedia"][0].source_url}

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
              slug={post.slug}
              link={post.link}
              ribbonPostDate={convertDate(post.modified)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default index
