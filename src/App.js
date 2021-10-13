import { ThemeProvider } from 'styled-components'

import Header from './components/header'
import Routes from './routes'

import { GlobalStyle, theme } from './styles/global'

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Header />
				<Routes />
			</ThemeProvider>
		</>
	)
}

export default App
