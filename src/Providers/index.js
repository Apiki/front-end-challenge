import { PostProvider } from "./Posts";

const Providers = ({ children }) => {
  return <PostProvider>{children}</PostProvider>;
};

export default Providers;
