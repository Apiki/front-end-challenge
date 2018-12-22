import React from 'react';
import Menu from './menu';
import Axios from 'axios';
import Footer from './footer';

class Detail extends React.Component {
    state = {
        post: null
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
                return res.data;
            })
            .then(
                (resu) => {
                    this.setState({
                        post: resu[0]
                    });
                }
            )
    }

    componentDidMount() {
        this.load(this.props.match.params.p)
    }

    render() {
        return (
            <div>
                <Menu />
                <div className='section'>
                    {
                        this.state.post == null ? <div></div> :
                            <div>
                                <div style={{ backgroundImage: 'url(' + this.state.post._embedded['wp:featuredmedia'][0]['media_details']['sizes']['post-thumbnail']['source_url'] + ')' }} className='jumbotron detail-image text-center'>
                                </div>

                                <div className='container'>
                                    <h2>{this.state.post.title.rendered}</h2>
                                    <div className="col-12">
                                        <strong>{this.state.post._embedded.author[0].name}  -  </strong>
                                        <time>{this.state.post.date}</time>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className="main-content text-center" dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered }} />
                                    </div>
                                </div>
                            </div>
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

export default Detail;