import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Main from './components/Main';
import NavBar from './components/NavBar';
import AddCharacter from './components/AddCharacter';

class App extends Component {
  state = {
    isOpen: false
  };

  onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderContainer = () => (
    <div className="container">
      <Route exact path="/" component={Main} />
      <Route exact path="/addCharacter" component={AddCharacter} />
    </div>
  )

  render() {
    return (
      <div className="App">
        <NavBar onToggle={this.onToggle} isOpen={this.state.isOpen} />
        {this.renderContainer()}
      </div>
    );
  }
}

export default App;
