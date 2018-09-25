import React from 'react'

class Link extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h5><strong>{this.props.title}</strong></h5>
                <a href="#">{this.props.link}</a>
            </React.Fragment>
        )
    }
}

export default Link