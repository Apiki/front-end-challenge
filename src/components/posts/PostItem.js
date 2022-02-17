import Card from '../ui/Card'
import classes from './PostItem.module.css';
import { Link } from 'react-router-dom';

function PostItem( props ) {

    const link = '/post/' + props.slug;
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.add}</address>
                    <Link to={ link }>{props.slug}</Link>
                </div>
            </Card>
        </li>
    );
}

export default PostItem;