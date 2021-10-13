import PropTypes from "prop-types"

import FormatDate from '../../../utils/formatDate'
import { Container, ContentWrapper, ImageWrapper } from './styles'

const Card = ({ post }) => {
	return (
		<Container>
			<ImageWrapper image={post.image} />
			<ContentWrapper>
				<h3>{post.title}</h3>
				<div dangerouslySetInnerHTML={{ __html: post.resume }} />
				<span>{FormatDate(post.createdAt)}</span>
			</ContentWrapper>
		</Container>
	)
}

Card.propTypes = {
	post: PropTypes.shape({
		image: PropTypes.string,
		title: PropTypes.string.isRequired,
		resume: PropTypes.string,
		createdAt: PropTypes.string
	}).isRequired
}

export default Card
