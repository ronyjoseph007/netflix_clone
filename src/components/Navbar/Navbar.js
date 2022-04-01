import React from 'react';

import './Navbar.css';
import login from '../../images/login.png';

function Navbar() {
    return (
        <div className="navbar">
            <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt=""
            />

            <img className="avatar" src={login} alt="" />
        </div>
    );
}

export default Navbar;
