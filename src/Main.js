import { Component } from 'react';
import { Container } from 'react-bootstrap';
import HornedBeast from './HornedBeast.js';
import data from './data.json';

class Main extends Component {

    render(){
        let filteredData = [];
        if (this.props.value === '' && this.props.horns === 'all') {
            filteredData = [...this.props.data];
        } else {}

        return(
            <Container>
                {
                    data.map(element => {
                        return (
                            <div>
                            <HornedBeast 
                            title={element.title} 
                            description={element.description} 
                            image_url={element.image_url} 
                            keyword={element.keyword} 
                            horns={element.horns}
                            showModal={this.props.showModal}
                            />
                            </div>
                        )
                    })
                }
            </Container>
        )
    }
}

export default Main;