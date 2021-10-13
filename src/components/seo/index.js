import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description }) => (
	<Helmet>
		<title>Apiki Dev</title>

		<meta name="description" content="O melhor conteúdo para desenvolvedores" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="language" content="portuguese" />
		<meta name="charset" content="utf-8" />
		<meta name="robots" content="index, follow" />

		<meta property="twitter:title" content={title} />
		<meta property="twitter:description" content={description} />
		<meta property="twitter:card" content="summary" />

		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:type" content="website" />

		<meta name="theme-color" content="#ff6600" />
		<meta name="application-name" content={title} />
		<meta name="apple-mobile-web-app-title" content={title} />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="#ff6600" />

		<link rel="stylesheet" type="text/css" href="/styles/nprogress.css" />
		<link rel="preconnect" href="https://fonts.gstatic.com" />
	</Helmet>
)

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string
}

export default SEO
