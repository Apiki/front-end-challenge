import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' href='/'><img src='https://blog.apiki.com/wp-content/uploads/sites/2/2018/05/logo-blog.png' alt='Logo' /></a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;