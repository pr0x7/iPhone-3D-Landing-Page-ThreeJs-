import React from 'react';
import AnimatedLogo from "/Users/prox/Downloads/iphone-3d-website-starter-main/src/assets/images/logo-animated.gif"

function Loader(props) {
    return (
        <div className='loader'>
            <img src={AnimatedLogo} className='logo' alt="apple loader" />
            
        </div>
    );
}

export default Loader;