import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from '../template/img/logo.webp';

export default class Header extends Component {
    render() {
        return(
            <nav className="navbar">
                <div className="container d-flex justify-content-between">
                    <Link to='/' ><img src={logo} className="pt-3 px-2 img-fluid rounded-start" alt='Inicio' /></Link>
                </div>
                <div className="m-4 container-fluid w-100">
                    <div className="separator"></div>
                </div>
            </nav>
        )
    }
}