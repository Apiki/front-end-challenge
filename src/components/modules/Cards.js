import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Modal from './Modal';
export default class Cards extends Component{
    
    render(){
        const {post} = this.props;
        return(
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch" >
                <div className="row mx-1" >
                    <div className="card mb-3">
                        <img src={post._embedded['wp:featuredmedia'][0].source_url} className="pt-3 px-2 img-fluid rounded-start" alt={post.title.rendered} />
                        <div className="card-body">
                            <h5 className="card-title">{post.title.rendered}</h5>
                            <span>
                                <p id="card-description" className="card-text">
                                    {post.yoast_head_json.description}
                                </p>
                            </span>
                        </div>
                    <div className="my-3 d-flex justify-content-center align-items-center" >
                        <button type="button" className="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target={'#modal-'+post.id}>Ler rapidamente</button>
                        <Link to={'/'+post.slug} className="btn btn-secondary mx-3">Ler na página</Link>
                    </div>
                    </div>
                <Modal modal_id={post.id} modal_content={post.content.rendered} modal_title={post.title.rendered}></Modal>
                </div>
            </div>
        )
    }
}
