import PropTypes from 'prop-types'

import FormatDate from '../../../utils/formatDate'
import { Container, Wrapper, Resume, Text } from './styles'

const Content = ({ post }) => {
	return (
		<Container>
			<Wrapper>
				<h1>{post.title}</h1>
				<Resume dangerouslySetInnerHTML={{ __html: post.resume }} />
				<span>{FormatDate(post.createdAt)}</span>
				<Text dangerouslySetInnerHTML={{ __html: post.content }} />
			</Wrapper>
		</Container>
	)
}

Content.propTypes = {
	post: PropTypes.shape({
		title: PropTypes.string,
		resume: PropTypes.string,
		createdAt: PropTypes.string,
		content: PropTypes.string,
	}).isRequired,
}

export default Content
