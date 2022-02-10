import "./index.css"

import PostCardExampleImage from "../../../../assets/PostCardExampleImg.png"
import PostCardExampleImage2 from "../../../../assets/PostCardExampleImg2.png"

import PostCard from './components/PostCard'

const index = () => {
  return (
    <div className="body">
      <div className="body__PostCards">
        <PostCard image={PostCardExampleImage}/>
        <PostCard image={PostCardExampleImage2}/>
        <PostCard image={PostCardExampleImage}/>
      </div>
    </div>
  )
}

export default index
