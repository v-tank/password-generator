import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      fromChild: ''
    };
  }

  handleData(data) {
    console.log(data);
    this.setState({
      fromChild: data
    });
  }


  render() {
    return (
      <div>
        <Jumbotron />
        <Form handler={this.handleData}/>
        
      </div>
    );
  }
}

export default App;
