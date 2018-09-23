import React from 'react'
import Thumbnail from './Thumbnail'
import Info from './Info'
import '../Css/Content.css';

class Content extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="info">
                    <div class="container">
                        <Info />
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-6 col-sm-4 col-md-3">
                            <Thumbnail img="img1" title="Quis incididunt1" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                            <Thumbnail img="img2" title="Quis incididunt2" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                            <Thumbnail img="img3" title="Quis incididunt3" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                            <Thumbnail img="img4" title="Quis incididunt4" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                            <Thumbnail img="img1" title="Quis incididunt1" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                            <Thumbnail img="img2" title="Quis incididunt2" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                            <Thumbnail img="img3" title="Quis incididunt3" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                        </div>
                        <div class="col-xs-6 col-sm-4 col-md-3">
                            <Thumbnail img="img4" title="Quis incididunt4" desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Content