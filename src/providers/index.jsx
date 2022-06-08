import { PagesPostsProvider } from "./pagesPosts";
import { PostInternalProvider } from "./postInternal";

const Providers = ({children}) => {
    return(
        <PagesPostsProvider>
            <PostInternalProvider>
                {children}
            </PostInternalProvider>            
        </PagesPostsProvider>
    )
}

export default Providers