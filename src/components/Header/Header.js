import React from 'react';

import Logo from '../../images/logo.png';

function Header() {
    return(
        <div className="w-full px-4 py-4 mb-10">
            <img src={Logo} alt="" className="max-h-16"/>
        </div>
    );
}

export default Header;