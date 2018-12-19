import React, { Component } from 'react';
import './App.css';
import {mapBox,} from './services/mapBoxes'; 
import {validations} from './services/validations';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      size : '',
      checkerboard: '',
      output: [],

    };
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onChangeCheckerboard = this.onChangeCheckerboard.bind(this);
    this.toConsoleOnPress = this.toConsoleOnPress.bind(this);
  }


  
    onChangeSize(event){
      let input = event.target.value
      
      this.setState({
         size: input
      });
    }

    onChangeCheckerboard(event){
      let input = event.target.value
      this.setState({ 
       checkerboard: input
      });
    }

 
    onButtonPress(event){
      event.preventDefault();
      let size = this.state.size;
      let checkerboard = this.state.checkerboard;
      //validate input
      let validate = validations(size, checkerboard);
      if(validate === false){
        return;
      }

      /*once we call the service to create our array, our results will be displayed
      on the page automatically.
      */
      this.setState({
        output: mapBox(size, checkerboard)
      });
   
 
    }

    toConsoleOnPress(event){
      //for testing the limit of application
      let size = this.state.size;
      let checkerboard = this.state.checkerboard;
      let data = mapBox(size, checkerboard);

      console.log(data);


    }


  render() {
    
    return (
      <div className="container-fluid pt-2">
      <h1 className="text-center">Checkerboard Generator</h1>

<div className="row justify-content-center">
  <div className="col-4">
    <label>Number of checkerboards:</label>

    <input  className="form-control"
     value={this.state.checkerboard}
     onChange={this.onChangeCheckerboard} 
     type="number"
     placeholder="eg. 4 will equal 4 x 4"
     min="0"
    />

  </div>

  <div className="col-4">
    <label>Size:</label>

    <input  className="form-control"
     value={this.state.onChangeSize}
     onChange={this.onChangeSize} 
     type="number"
     placeholder="eg. 4 will equal 4 x 4"
     min="0"
    />
   

  </div>

  </div>

  <div className="row justify-content-center m-3">

  <input className="btn btn-dark col-auto"
  type="submit"
   onClick={this.onButtonPress}
   value="generate!"
  />

<input className="btn btn-dark col-auto"
  type="submit"
   onClick={this.toConsoleOnPress}
   value="output to console"
  />
  </div>
     <div className="row justify-content-center">
     <pre>
       
       {this.state.output.map((item, index) => <span key={index}>{item}<br/></span>)}
      </pre>
     </div>
  
     </div>
    );
  }
}

export default App;
