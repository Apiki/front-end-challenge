import React from 'react'

let menuBtn = document.querySelectorAll('[data-toggle="collapse"]');

Array.prototype.forEach.call(menuBtn, (btn) => {
    
});

const Header = pros => {
    return (
        <nav className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>			
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <a className='navbar-brand' href='#myPage'><img src='https://blog.apiki.com/wp-content/uploads/sites/2/2018/05/logo-blog.png' alt='Logo' /></a>
                </div>
                <div className='collapse navbar-collapse' id='myNavbar'>
                    <ul className='nav navbar-nav navbar-right'>
                        <li><a href='#'>DESENVOLVIMENTO</a></li>
                        <li><a href='#'>INFRA</a></li>
                        <li><a href='#'>MOBILE</a></li>
                        <li><a href='#'>PERFORMACE</a></li>
                        <li><a href='#'>SEGURANÇA</a></li>
                        <li><a href='#'>SEO</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header 
