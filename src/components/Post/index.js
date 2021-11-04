import './post.css'
import { React } from 'react'


export function Post(props) {


    return (
        <li>
            <a href={props.post.link} target="blank">
                <div>
                    <img src={props.post._embedded['wp:featuredmedia'][0].source_url} alt="" />
                </div>

                <div className="post-info">
                    <h3>{props.post.title.rendered}</h3>
                    <p>Escrito por {props.post._embedded.author[0].name || 'not defined'}</p>
                    <p>{props.post.yoast_head_json.description}</p>
                </div>
            </a>
        </li>
    )
}