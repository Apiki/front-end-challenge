import { useEffect, useState } from "react"

import "./index.css"
import { GetPostContent } from "../../services/api"

import Header from "../../components/Header"
import Content from "./components/Content"
import ButtonBackToHome from "./components/ButtonBackToHome"

import { useLocation } from "react-router-dom";

const index = () => {

  const [postContent, setPostContent] = useState([]);

  useEffect(() => {
    loadPostContent();

  }, []);

  const location = useLocation();
  const { slug } = location.state;

  const loadPostContent = async () => {
    const post = await GetPostContent(slug);
    setPostContent([...post[0]])
  }

  console.log(postContent)

  return (
    <div>
      <Header />
      <div className="post">
        <ButtonBackToHome />
        {
          postContent.map((post, index) => (
            <Content
              key={post.id}
              postTitle={post.title.rendered}
              postExerpt={post.excerpt.rendered}
              postImage={post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].source_url : post._embedded["wp:term"][0][0].yoast_head_json.og_image[0].url}
              postContent={post.content.rendered}
              postDate={post.date}
              postModifiedDate={post.modified}
              authorName={post._embedded.author[0].name}
              authorLink={post._embedded.author[0].link}
              authorDescription={post._embedded.author[0].description}
              authorImage={post._embedded.author[0].avatar_urls ? post._embedded.author[0].avatar_urls[96] : ""}
            />
          ))
        }
        <ButtonBackToHome />
      </div>
    </div>
  )
}

// [Object.keys(avatar_urls)[Object.keys(avatar_urls).length - 1]]

export default index