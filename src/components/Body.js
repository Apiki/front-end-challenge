import React, {Component} from "react";
import Content from './modules/Content';


export default class Body extends Component {
    render(){
        return(
            <div id="get-posts" className="container">
                <div className="mb-5 d-flex justify-content-center align-items-center" >
                    <h1>Todos os Posts: Desenvolvimento</h1>
                </div>
                <Content />
            </div>
        )
    }
}