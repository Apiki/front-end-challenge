import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './header';
import Menu from './menu';
import Footer from './footer';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
            count: 2,
            totalPages: 0,
            first: null

        };

    }

    load(slug, page) {
        let newUrl = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518';

        if (slug != null) {
            newUrl += '&slug=' + slug;
        }
        if (page != null) {
            newUrl += '&page=' + page;
        }

        Axios.get(newUrl)
            .then(res => {
                this.setState({ totalPages: res.headers['x-wp-totalpages'] });
                return res.data;
            })
            .then(
                (resu) => {
                    var p = resu.shift();
                    this.setState({
                        list: [
                            ...this.state.list,
                            ...resu
                        ],
                        first: p
                    });
                }
            )
    }

    componentDidMount() {
        this.load();

    }

    render() {
        return (
            <div>
                <Menu />
                <Header post={this.state.first} />
                <div>
                    <div className='container'>
                        <div className='row'>
                            {
                                this.state.list.map(post => (
                                    <div key={post.id} className="col-3">
                                        <div className="card text-white bg-dark">
                                            <img src={post._embedded['wp:featuredmedia'][0]['media_details']['sizes']['thumbnail']['source_url']} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                                <p className="card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                            </div>
                                            <div class="card-footer text-muted">
                                                <Link to={{ pathname: `/detail/${post.slug}` }} className='btn read-more btn-sm btn-primary'>VER MAIS </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className='col-sm-12'>
                                <button className='btn read-more btn-sm btn-primary' onClick={() => { this.load(null, this.state.count); this.setState({ count: this.state.count + 1 }); }}>Carregar mais</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

}

export default Home;