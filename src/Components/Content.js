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
                        
                            <Thumbnail title="Do incididunt enim." desc="Ut eu Lorem enim in proident eiusmod ullamco magna voluptate ullamco." />
                            <Thumbnail title="Veniam reph endert." desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute" />
                            <Thumbnail title="Proident exeitatio." desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                            <Thumbnail title="Incididunt lore ex." desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                            <Thumbnail title="Consequat ae sunt." desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                            <Thumbnail title="Nisi ex occcat aute." desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                            <Thumbnail title="Adipisng incididunt." desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
                            <Thumbnail title="Duis anim sunt." desc="Id culpa incididunt eiusmod et tempor ullamco dolor eiusmod aute nisi irure." />
     
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Content