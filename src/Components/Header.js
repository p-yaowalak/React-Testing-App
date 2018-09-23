import React from 'react'
import '../Css/Header.css';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container header-data">
                    <img src="..." alt="..." className="img-circle"/>
                    <ul className="nav">
                        <li className="active"><a href="#">Dashboard</a></li>
                        <li><a href="#">Inbox</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Refer Friends</a></li>
                    </ul>
                </div>
            </React.Fragment>
        )   
    }
}

export default Header