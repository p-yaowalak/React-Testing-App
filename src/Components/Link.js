import React from 'react'

class Link extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h4><strong>{this.props.title}</strong></h4>
                <div><a href={null}>{this.props.link}</a></div>
                <div><a href={null}>{this.props.link2}</a></div>
                <div><a href={null}>{this.props.link3}</a></div>
                <div><a href={null}>{this.props.link4}</a></div>
            </React.Fragment>
        )
    }
}

export default Link