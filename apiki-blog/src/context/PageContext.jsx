import { createContext, useState } from "react";

const PageContext = createContext()

export default PageContext

export const PageProvider = ({children}) => {

    const [pageCurrent, setPageCurrent] = useState(1)
    const [pageTotal, setPageTotal] = useState(0)

    const context = {
        pageCurrent,
        setPageCurrent,
        pageTotal,
        setPageTotal
    }

    return (
        <PageContext.Provider value={context}>
            {children}
        </PageContext.Provider>
    )
}