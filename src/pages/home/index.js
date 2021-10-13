import { useState, useEffect } from 'react'

import { SEO, Posts } from '../../components'
import useInfiniteAxios from '../../hooks/useInfiniteAxios'
import transformToPost from '../../utils/transformToPost'

// A function to get the SWR key of each page,
// its return value will be accepted by `fetcher`.
// If `null` is returned, the request of that page won't start.
const getKey = (pageIndex, previousPageData) => {
	if (previousPageData && !previousPageData?.data?.length) return null
	return `/posts?_embed&categories=518&per_page=12&page=${pageIndex + 1}` // SWR key
}

const Home = () => {
	const [hasMorePosts, setHasMorePosts] = useState(true)
	const [posts, setPosts] = useState([])
	const { data, loading, isLoadingMore, size, setSize } = useInfiniteAxios(getKey)

	useEffect(() => {
		if (data?.length) {
			if (size >= Number(data[0].total_pages || 0)) setHasMorePosts(false)
			const newPosts = data.map((item) => item.data?.map(transformToPost))
			setPosts([].concat(...newPosts))
		}
	}, [data])

	const handleSeeMore = () => setSize(size + 1)

	return (
		<>
			<SEO
				title="Apiki DEV"
				description="O melhor conteúdo sobre desenvolvimento da internet brasileira"
			/>
			<Posts
				posts={posts}
				seeMore={handleSeeMore}
				loading={loading || isLoadingMore}
				hasMorePosts={hasMorePosts}
			/>
		</>
	)
}

export default Home
