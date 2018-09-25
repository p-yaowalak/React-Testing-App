import React from 'react'

class Thumbnail extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-xs-12 col-sm-4 col-md-3">
                    <div className="article">
                        <img src={ require('../Images/placeholder.png') } alt="{this.props.title}" />
                        <div className="caption">
                            <h4><strong>{this.props.title}</strong></h4>
                            <p>{this.props.desc}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Thumbnail