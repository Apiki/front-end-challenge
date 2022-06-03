import { PagesPostsProvider } from "./pagesPosts";

const Providers = ({children}) => {
    return(
        <PagesPostsProvider>
            {children}
        </PagesPostsProvider>
    )
}

export default Providers