import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { CardContent, Cards } from "../interfaces/cardContent";
import { api } from "../utils/apiApiki";

type APIContextProps = {
    children: ReactNode
}

type CardsContextData = {
    cards: CardContent[],
    setData: (newState: []) => void
    page: number
    setPage: (newState: number) => void
    loading: boolean
    setLoading: (newState: boolean) => void
    totalPage: number | string | undefined
    setTotalPage: (newState: number | string | undefined) => void

}

const initialValue = {
    cards: [],
    setData: () => { },
    page: 1,
    setPage: () => { },
    loading: true,
    setLoading: () => { },
    totalPage: 1,
    setTotalPage: () => { }
}

const APIContext = createContext<CardsContextData>(initialValue)


export function APIContextProvider({ children }: APIContextProps) {

    const [cards, setData] = useState(initialValue.cards)
    const [page, setPage] = useState(initialValue.page)
    const [loading, setLoading] = useState(initialValue.loading)
    const [totalPage, setTotalPage] = useState<number | string | undefined | null | unknown | any>()

    useEffect(() => {

        const loadData = async () => {
            const ApiCards = await api.fetchData(page)
            if (page == 1) {
                const maxPage = await api.fetchMaxPage()
                setTotalPage(maxPage)
                setData(cards.concat(ApiCards))
            } if (page > 1 && page < totalPage) {
                setData(cards.concat(ApiCards))
            }
        }
        loadData()
        setLoading(false)
    }, [page])

    return (
        <APIContext.Provider value={{
            cards,
            setData,
            page,
            setPage,
            loading,
            setLoading,
            totalPage,
            setTotalPage
        }}>
            {children}
        </APIContext.Provider>
    )
}

export function UseAPI() {
    const context = useContext(APIContext)
    if (context == undefined) {
        throw new Error('Context deve ser usado com um Provider');
    }
    return context
}