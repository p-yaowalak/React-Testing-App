import React from 'react'
import Link from './Link'
import '../Css/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6 col-sm-3">
                                <Link title="Quis incididunt1" link="Id culpa incididunt"  link="Id culpa incididunt"/>
                            </div>
                            <div className="col-xs-6 col-sm-3">
                                <Link title="Quis incididunt2" link="Id culpa incididunt" />
                            </div>
                            <div className="col-xs-6 col-sm-3">
                                <Link title="Quis incididunt3" link="Id culpa incididunt" />
                            </div>
                            <div className="col-xs-12 col-sm-3">
                                <Link title="Quis incididunt4"/>
                                <img src="..." alt="..." className="img-circle"/>
                                <img src="..." alt="..." className="img-circle"/>
                                <img src="..." alt="..." className="img-circle"/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer