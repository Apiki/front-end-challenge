import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Modal from './Modal';
import noImg from '../../template/img/image-not-found.jpg'
export default class Cards extends Component{
    render(){
        function verifyImgEmpty() {
            if (!! post._embedded['wp:featuredmedia']) {
                return post._embedded['wp:featuredmedia'][0].source_url
            }else{
                return noImg
            }
         }
        const {post} = this.props;
        return(
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch" >
                <div className="row mx-1" >
                    <div className="card mb-3">
                        <img src={verifyImgEmpty()} className="pt-3 px-2 img-fluid rounded-start" alt={post.title.rendered} />
                        <div className="card-body">
                            <h5 className="card-title">{post.title.rendered}</h5>
                            <span>
                                <p id="card-description" className="card-text">
                                    {post.yoast_head_json.description}
                                </p>
                            </span>
                        </div>
                    <div className="my-3 d-flex justify-content-center align-items-center" >
                        <button type="button" className="btn mx-3" data-bs-toggle="modal" data-bs-target={'#modal-'+post.id}><i className="far fa-eye mx-1"></i> Ler aqui</button>
                        <Link to={'/'+post.slug} className="btn mx-3"><i className="fas fa-share-square mx-1"></i>Ler na página</Link>
                    </div>
                    </div>
                <Modal modal_id={post.id} modal_content={post.content.rendered} modal_title={post.title.rendered} modal_image={verifyImgEmpty()}></Modal>
                </div>
            </div>
        )
    }
}
