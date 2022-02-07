import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main';
import Interna from './pages/Interna';
import axios from 'axios';


function Routes(){
    
   

    return(

        
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                    <Route path= "/interna/:slug" component= {Interna} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;