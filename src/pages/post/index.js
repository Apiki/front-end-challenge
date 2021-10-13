import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { SEO, PostHero, PostContent } from '../../components'

import useAxios from '../../hooks/useAxios'
import transformToPost from '../../utils/transformToPost'

const Post = () => {
	const { slug } = useParams()
	const { data, loading } = useAxios(`posts?_embed&slug=${slug}`)
	const [post, setPost] = useState({})
	const [seo, setSeo] = useState({})

	useEffect(() => {
		if (!loading) {
			const post = transformToPost(data[0] || {})
			setPost(post)
			setSeo({
				title: data[0]?.yoast_head_json?.title,
				description: data[0]?.yoast_head_json?.description,
			})
		}
	}, [data, loading])

	return (
		<>
			<SEO title={seo.title} description={seo.description} />
			<PostHero image={post.image} />
			<PostContent post={post} />
		</>
	)
}

export default Post
