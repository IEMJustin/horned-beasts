import { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Modal from './selectedBeast';

export default class SelectedBeast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      SelectedBeast: {}, modal: false
    }
  }

  changeBeast = (beast) => {
    this.setState({ selectedBeast: beast })
  }

  showModal = () => {
    this.setState({ modal: true })
  }

  hideModal = () => {
    this.setState({ modal: false })
  }

  render() {
    return (
      <div>
        <Header />
        <Main changeBeast={this.changeBeast} showModal={this.showModal}/>
        <Footer />
        <Modal beast={this.state.selectedBeast} hideModal={this.hideModal} showModal={this.state.modal}/>
      </div>
    )
  }
}

// export default class Footer extends Component {
//   render() {
//       return (
// function switchBeast () {

// }
// // cant think of 

// function App() {
//   return (
//     <div>
//     <Header />
//     <Main />
//     <Footer />
//     </div>

//   );
// }

// export default App;
