import React from "react";
import Tilt from 'react-tilt';
import './Logo.css'
import logo from './logo.svg'

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return (
            <div className='ma4 mt0'>
                <Tilt ref={this.myRef} className="Tilt br5 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                    <div className="Tilt-inner pa3 flex">
                        <img src={logo} alt="logo" />
                        <h1 className="white">FindThyFace</h1>
                    </div>
                </Tilt>
            </div>
        )
    }
}

export default Logo;