import { Component, Button } from "react";
import Modal from "react-bootstrap";

class SelectedBeast extends Component {

    render() {
        return (
            <>
            <Modal
                show={this.props.showModal}
                onHide={this.props.hideModal}
                backdrop="static"
                keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.beast.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div>
                            <h2>{this.props.title}</h2>
                            <img src={this.props.image_url} alt={'HornedBeasts'} width='600px'></img>
                            <p>{this.props.description}</p>
                            <p>{this.props.keyword}</p>
                            <p>{this.props.horns}</p>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.handleClose}>Close</Button>
                    </Modal.Footer>
            </Modal>
            </>
        )
    }
}

export default SelectedBeast
// {/* <h2>{this.props.title}</h2>
// <img onClick={this.handleClick} src={this.props.image_url} alt={'img'} width='600px'/>
// <p>{this.props.description}</p>
// <p>{this.props.keyword}</p>
// <p>Horns:{this.props.horns}</p>
// <p>Favorites: {this.state.clicksPer}</p> */}