function Modal( props ){
    
    return(
        <div key={'modal-'+props.modal_id} className="modal fade" id={'modal-'+ props.modal_id} tabIndex="-1" aria-labelledby={props.modal_id+"ModalLabel"} aria-hidden="true">
                <div key={'modal-dialog-'+props.modal_id} className="modal-dialog  modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div key={'modal-content-'+props.modal_id} className="modal-content">
                        <div key={'modal-header-'+props.modal_id} className="modal-header">
                            <h5 key={'modal-title-'+props.modal_id} className="modal-title" id={props.modal_id+"ModalLabel"}>{props.modal_title}</h5>
                            <button key={'modal-button-close-'+props.modal_id} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div key={'modal-body-'+props.modal_id} dangerouslySetInnerHTML={{ __html: props.modal_content }} className="modal-body">
                        </div>
                        <div key={'modal-footer-'+props.modal_id} className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Modal