import React, {
  createContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch
} from 'react'
import { getPostApi, PostFormatted, PostHeaders } from '../hooks'

type ContextProp = {
  children: React.ReactNode;
};

type ProviderPage = {
  post: PostFormatted[];
  nextPage: () => void;
  btnNextPageOff: boolean;
  currentPage: number;
  isFavorite: PostFormatted;
  setIsFavorite: Dispatch<SetStateAction<PostFormatted>>;
};

export const PageContext = createContext({} as ProviderPage)

export const ContextProvider = ({ children }: ContextProp) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [headers, setHeaders] = useState<PostHeaders>()
  const [post, setPost] = useState<PostFormatted[]>([])
  const [btnNextPageOff, setBtnNextPage] = useState(false)
  const [isFavorite, setIsFavorite] = useState<PostFormatted>(
    {} as PostFormatted
  )

  async function getPost() {
    const [getPost, getHeaders] = await getPostApi(currentPage)
    setHeaders(getHeaders)
    setPost(getPost)
  }

  function nextPage() {
    if (currentPage < Number(headers?.['x-wp-totalpages'])) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    getPost()
    if (currentPage === Number(headers?.['x-wp-totalpages'])) {
      setBtnNextPage(true)
    }
  }, [currentPage])

  return (
    <PageContext.Provider
      value={{
        post,
        nextPage,
        btnNextPageOff,
        currentPage,
        isFavorite,
        setIsFavorite
      }}
    >
      {children}
    </PageContext.Provider>
  )
}
