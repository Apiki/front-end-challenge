import classes from './PostItemUnico.module.css';


function PostItemUnico( props ) {
    const elemento = (
        <div>
            <div className={classes.image}>
                <img src={props.post.image} alt={props.post.title.rendered} />
            </div>
            <h1>{props.post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.post.content.rendered  }}></div>
        </div>
    );
    return elemento;        
}

export default PostItemUnico;