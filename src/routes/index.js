import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import Post from '../pages/post'

const Routes = () => (
	<Router>
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/posts/:slug">
				<Post />
			</Route>
		</Switch>
	</Router>
)

export default Routes
