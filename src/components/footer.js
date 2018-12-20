import React from 'react'

const Footer = props => {
    return (
        <footer id='footer'>
            <div className='footer-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='footer-top-area'>
                                <a classNameName='footer-logo' href='#'><img src='https://apiki.com/wp-content/uploads/2018/04/logo-apiki-site-01.png' alt='Logo' /></a>
                                <div className='footer-social'>
                                    <a className='facebook' href='#'><span className='fab fa-facebook-f'></span></a>
                                    <a className='twitter' href='#'><span className='fab fa-twitter'></span></a>
                                    <a className='linkedin' href='#'><span className='fab fa-linkedin-in'></span></a>
                                    <a className='youtube' href='#'><span className='fab fa-youtube'></span></a>
                                    <a className='instagram' href='#'><span className='fab fa-instagram'></span></a>
                                    <a className='github' href='#'><span className='fab fa-github'></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer