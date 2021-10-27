import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class HornedBeast extends Component {
    constructor(props) {
    super(props);
    this.state = {
        clicksPer: ''
    }
}

// title(h2), description <p>, img

// Define function handleClick
handleClick = () => {
    console.log('clicked')
    // Double check onClick is being logged when clicking img
    this.setState({ clicksPer: this.state.clicksPer + '♥'});
}

    render() {
        return (
            <div>
                <h2>{this.props.beastTitle}</h2>
                <img onClick={this.handleClick} src={this.props.url} alt={'img'} width='600px'/>
                <p>{this.props.description}</p>
                <p>{this.props.keyword}</p>
                <p>Horns:{this.props.horns}</p>
                <p>Favorites: {this.state.clicksPer}</p>
                <Button variant="dark" onClick={this.handleClick}>Favorite</Button>{' '}
            </div>
        )
    }
}

