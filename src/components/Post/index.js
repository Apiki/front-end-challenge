import './post.css'
import { React } from 'react'



export function Post(props) {


    return (


        <li>
            <a href="https://github.com/cmrib" target="blank">
                <div>
                    <img src={props.post._embedded['wp:featuredmedia'][0].source_url} alt="" />
                </div>

                <div className="post-info">
                    <h3>{props.post.title.rendered}</h3>
                    <p>autor: {props.post._embedded.author[0].name}</p>
                    <p>{props.post.excerpt.rendered}</p>
                </div>
            </a>
        </li>

    )
}