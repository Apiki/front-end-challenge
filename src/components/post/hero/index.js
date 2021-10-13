import PropTypes from 'prop-types'

import { Container } from './styles'

const Hero = ({ image }) => <Container image={image} />

Hero.propTypes = {
	image: PropTypes.string,
}

export default Hero
