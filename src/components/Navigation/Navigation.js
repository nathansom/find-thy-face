import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={ () => onRouteChange('signedout') } className='f3 link dim pa3 pointer white-90'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={ () => onRouteChange('signin') } className='f3 link dim pa3 pointer white-90'>Sign In</p>
                <p onClick={ () => onRouteChange('register') } className='f3 link dim pa3 pointer white-90'>Register</p>
            </nav>
        )
    }
}

export default Navigation;