import React from 'react'
import '../Css/Header.css';


class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container header-data">
             
                    <div className="logo">
                        <img src="..." alt="..." className="img-circle"/>
                    </div>
                    <ul className="nav nav-pills">
                        <li className="active"><a href="#"><strong>Home</strong></a></li>
                        <li><a href="#"><strong>About Us</strong></a></li>
                        <li><a href="#"><strong>Gallery</strong></a></li>
                        <li><a href="#"><strong>Contact</strong></a></li>
                    </ul>
                </div>
            </React.Fragment>
        )   
    }
}

export default Header