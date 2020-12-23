import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Conteudo from './pages/Conteudo';
import Page from './pages/Page';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}></Route>
                <Route path="/Home" component={Home}></Route>
                <Route path="/conteudo" component={Conteudo}></Route>
                <Route path="/Page" component={Page}></Route>
            </Switch>   
        </BrowserRouter>

    );
    
}

export default Routes;