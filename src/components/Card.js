import {Link} from 'react-router-dom'
export function Card(props) {
    return (
        <div className="card">
            <div>
                <img src={props.img} alt="" />
                <h2>{props.title}</h2>
            </div>
            <Link to={props.link}>Leia mais</Link>
        </div>
    )
}