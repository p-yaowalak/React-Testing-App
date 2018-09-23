import React from 'react'

class Thumbnail extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="thumbnail">
                    <img src="{this.props.img}" alt="..."/>
                    <div className="caption">
                        <h3>{this.props.title}l</h3>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Thumbnail