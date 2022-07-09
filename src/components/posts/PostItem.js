import Card from '../ui/Card'
import classes from './PostItem.module.css';
import { Link } from 'react-router-dom';

function PostItem(props) {

    const link = '/post/' + props.slug;
    return (
        <div className={classes.item}>
            <Card>
                <Link to={link}>
                    <div className={classes.image}>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className={classes.content}>
                        <h3>{props.title}</h3>

                    </div>
                </Link>
            </Card>
        </div>
    );
}

export default PostItem;