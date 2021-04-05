import { useContext } from 'react';
import ApikiBlogContext from '../context/ApikiBlogContext';
import PostCard from './PostCard';

const PostsList = () => {
  const { data } = useContext(ApikiBlogContext);
  return (
    data.map(
      (post) => <PostCard key={post.id} post={post} />
  ));
};

export default PostsList;
