import React from 'react'
import '../Css/Header.css';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container header-data">
                    <div className="logo"></div>
                    <ul className="nav nav-pills">
                        <li className="active"><a href={null}><strong>Home</strong></a></li>
                        <li><a href={null}><strong>About Us</strong></a></li>
                        <li><a href={null}><strong>Gallery</strong></a></li>
                        <li><a href={null}><strong>Contact</strong></a></li>
                    </ul>
                </div>
            </React.Fragment>
        )   
    }
}

export default Header