import React from 'react'

class Link extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p><strong>{this.props.title}</strong></p>
                <a href="#">{this.props.link}</a>
            </React.Fragment>
        )
    }
}

export default Link