import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                {
                    this.props.post == null ? <div></div> :
                        <div>
                            <div style={{ backgroundImage: 'url(' + this.props.post._embedded['wp:featuredmedia'][0]['media_details']['sizes']['post-thumbnail']['source_url'] + ')' }} className='jumbotron text-center'>
                                <h2 dangerouslySetInnerHTML={{ __html: this.props.post.title.rendered }}></h2>
                                <p dangerouslySetInnerHTML={{ __html: this.props.post.excerpt.rendered }}></p>
                                <div>
                                    <Link to={{ pathname: `/detail/${this.props.post.slug}` }} className='btn btn-sm btn-primary'>VER MAIS</Link>
                                </div>
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default Header;