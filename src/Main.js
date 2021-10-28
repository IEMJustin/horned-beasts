import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import data from '.data.json'
export default class Main extends Component {
    render() {
        return(
            <main>
                <Container>
                   {data.map(element => {
                       return (
                           <HornedBeast 
                           title={element.title} Image_Url={element.image_url} description={element.description} keyword={element.keyword} horns={element.horns}/>
                       )
                   })} 
                </Container>
            </main>
        )
    }
}