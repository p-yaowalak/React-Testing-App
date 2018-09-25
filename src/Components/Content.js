import React from 'react'
import Thumbnail from './Thumbnail'
import Info from './Info'
import '../Css/Content.css';

class Content extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="info">
                    <div className="container">
                        <Info />
                    </div>
                </div>
                <div className="news">
                    <div className="container">
                        <div className="row">
                            <Thumbnail title="Quis incididunt1" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                            <Thumbnail title="Quis incididunt2" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                            <Thumbnail title="Quis incididunt3" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                            <Thumbnail title="Quis incididunt4" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                            <Thumbnail title="Quis incididunt1" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                            <Thumbnail title="Quis incididunt2" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                            <Thumbnail title="Quis incididunt3" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                            <Thumbnail title="Quis incididunt4" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
     
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Content