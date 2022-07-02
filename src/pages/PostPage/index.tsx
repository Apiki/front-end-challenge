import { useParams } from "react-router-dom";
import { PostContent } from "../../components/Main/PostContent";
import { useFetchPost } from "../../services/api";

import './mediaqueries.css';

function PostPage() {
  const { slug } = useParams<string>()
  const { data, setData } = useFetchPost(slug!)

  return (
    <>
      {data &&
        <PostContent data={data![0]} />
      }
    </>
  )
}

export default PostPage;
