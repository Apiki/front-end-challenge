import React from 'react'

const Newsletter = props => {
    return (
        <div class='news-subs'>
            <div class='container text-center'>
                <div className='footer-top'>
                    <h1><b>Newsletter</b></h1>
                    <p>Junte-se a milhares de leitores para receber gratuitamente conteúdos do nosso blog escrito por especialistas em WordPress.</p>
                </div>
                <div class='row text-center'>
                    <div className='col-sm-5 form-group'>
                        <input className='form-control' id='name' name='name' placeholder='Seu primeiro nome' type='text' required />
                    </div>
                    <div className='col-sm-5 form-group'>
                        <input className='form-control' id='email' name='email' placeholder='Seu e-mail' type='email' required />
                    </div>
                    <div className='col-sm-2 form-group'>
                        <button className='btn btn-default btn-custom' type='submit'>RECEBA GRÁTIS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter