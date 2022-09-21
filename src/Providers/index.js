import { PagePostProvider } from "./PagePost";
import { PostProvider } from "./Posts";

const Providers = ({ children }) => {
  return (
    <PagePostProvider>
      <PostProvider>{children}</PostProvider>
    </PagePostProvider>
  );
};

export default Providers;
