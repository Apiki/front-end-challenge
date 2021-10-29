import './post.css'
import { React } from 'react'


export function Post(props) {

    return (


        <li>
            <a href="https://github.com/cmrib" target="blank">
                <div>
                    <img src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/10/Como-criar-Web-Stories-no-WordPress-open-graph.png" alt="" />
                </div>

                <div className="post-info">
                    <h3>{props.post.title.rendered}</h3>
                    <p>By: {props.post._embedded.author[0].name}</p>
                    <p>{props.post.excerpt.rendered}</p>
                </div>
            </a>


        </li>

    )
}