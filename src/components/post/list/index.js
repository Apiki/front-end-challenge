import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Card from '../card'

import { Container, ButtonWrapper, SeeMoreButton } from './styles'

const List = ({ posts, loading, seeMore, hasMorePosts }) => {
	return (
		<>
			<Container>
				{posts.map((item) => (
					<Link to={`/posts/${item.slug}`} key={item.id}>
						<Card post={item} />
					</Link>
				))}
			</Container>
			<ButtonWrapper>
				{hasMorePosts && (
					<SeeMoreButton onClick={seeMore} disabled={loading}>
						{loading ? 'Carregando...' : 'Ver mais'}
					</SeeMoreButton>
				)}
			</ButtonWrapper>
		</>
	)
}

List.propTypes = {
	posts: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	seeMore: PropTypes.func.isRequired,
	hasMorePosts: PropTypes.bool.isRequired
}

export default List
