import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getNotice } from "../Services/api";

export default function NoticeContent() {
  const {slug} = useParams()
  const [notice, setNotice] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchApi() {
      const noticeFromApi = await getNotice(slug);
      setNotice(noticeFromApi[0])
    }
    fetchApi()
  }, [])

  useEffect(() => {
    if (notice.id) {
      setLoading(false)
    }
  }, [notice])

  const {title, content, _embedded} = notice

  return (
    <div>
      {loading ? "Carregando..." :
      <div>
        <h1>{title.rendered}</h1> 
        <img src={_embedded["wp:featuredmedia"][0].source_url} alt="banner" />
        <p dangerouslySetInnerHTML={{ __html: content.rendered  }} />
      </div>
      }
    </div>
  )
}
