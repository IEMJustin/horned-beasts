import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class HornedBeast extends Component {

    constructor(props) {
    super(props);
    this.state = {
        clicksPer: ''
    }
}

handleClick = () => {
    console.log('clicked')
    
    this.setState({ clicksPer: this.state.clicksPer + '♥'});
}

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img onClick={this.handleClick} src={this.props.image_url} alt={'img'} width='600px'/>
                <p>{this.props.description}</p>
                <p>{this.props.keyword}</p>
                <p>Horns:{this.props.horns}</p>
                <p>Favorites: {this.state.clicksPer}</p>
                <Button variant="dark" onClick={this.handleClick}>Favorite</Button>{' '}
            </div>
        )
    }
}

export default HornedBeast;