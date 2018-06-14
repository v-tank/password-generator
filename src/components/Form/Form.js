import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      passLength: "",
      password: "",
    }
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs

    if (this.state.passLength === "") {
      alert("Fill out the desired password length!");
    } else {
      // alert(`User entered: ${this.state.passLength}`);
      this.setState({
        passLength: "",
      });

      this.generatePassword();
    }
  };  

  generatePassword = () => {
    var validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()_-+=[{}]\\|'\":;<,>.?/";

    var string = "";

    var desiredLength = parseInt(this.state.passLength, 10);
    console.log(`Desired length: ${desiredLength}`);

    for (var i = 0 ; i < desiredLength; i++) {
      var rand = Math.floor(Math.random() * validLetters.length);
      let char = validLetters.charAt(rand);
      string += char;
      
      // console.log(`${rand}, ${char}`);
    }

    console.log(string);

    this.setState({
      password: string
    });

    console.log(this.state.password);
    this.props.handler(this.state.password);
  }

  render() {
    return (
      <div className="row justify-content-center no-gutters">
        <div className="col-4 text-center">
          <form>
            <div className="md-form">
              <input 
                type="text" 
                id="length" 
                className="form-control"
                value={this.state.passLength}
                name="passLength"
                placeholder="Enter the desired password length"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="btn-group mr-4" data-toggle="buttons">
              <label className="btn btn-primary form-check-label">
                  <input type="checkbox" className="form-check-input" autocomplete="off" /> Checkbox 2
              </label>
              <label className="btn btn-primary form-check-label">
                  <input type="checkbox" className="form-check-input" autocomplete="off" /> Checkbox 3
              </label>
            </div>
            <button type="button" className="btn btn-default btn-rounded" onClick={this.handleFormSubmit}>Go</button>
          </form>
          <div className="result" style={{"margin": "20px"}}>
            {this.state.password}
          </div>
        </div>
      </div>
    );
  }
}
          
export default Form;
