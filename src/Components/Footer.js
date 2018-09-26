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
                                <Link title="Nisi commodo." link="Id culpa incididunt"  link2="Veniam ipsum conse" link3="Deserunt est"/>
                            </div>
                            <div className="col-xs-6 col-sm-3">
                                <Link title="Quis incididunt" link="Id culpa incididunt" link2="Veniam ipsum conse" link3="Deserunt est"/>
                            </div>
                            <div className="col-xs-6 col-sm-3">
                                <Link title="In excepteur" link="Id culpa incididunt" link2="Veniam ipsum conse"/>
                            </div>
                            <div className="col-xs-12 col-sm-3">
                                <h4><strong>Exercitation officia</strong></h4>
                                <div className="iconbox"></div>
                                <div className="iconbox"></div>
                                <div className="iconbox"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer