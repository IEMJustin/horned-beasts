import React, { Component } from 'react';

export default class HornedBeast extends Component {
// title(h2), description <p>, img
    render() {
        return (
            <div>
                <h2>{this.props.beastTitle}</h2>
                <img src={this.props.url}/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}