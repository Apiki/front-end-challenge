import { createContext, useState, useEffect } from "react";

const PageContext = createContext()

export default PageContext

export const PageProvider = ({children}) => {

    const [pageCurrent, setPageCurrent] = useState(() => 
    sessionStorage.getItem('pageCurrent') ? 
    sessionStorage.getItem('pageCurrent') : 1)
    const [pageTotal, setPageTotal] = useState(0)

    const context = {
        pageCurrent,
        setPageCurrent,
        pageTotal,
        setPageTotal
    }

    useEffect(() => {
      sessionStorage.setItem('pageCurrent', pageCurrent)
    }, [pageCurrent])

    return (
        <PageContext.Provider value={context}>
            {children}
        </PageContext.Provider>
    )
}