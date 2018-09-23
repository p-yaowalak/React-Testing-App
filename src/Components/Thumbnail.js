import React from 'react'

class Thumbnail extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="thumbnail">
                    <img src="{this.props.img}" alt="..."/>
                    <div class="caption">
                        <h3>{this.props.title}l</h3>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Thumbnail