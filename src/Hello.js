import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// ES5
// var Hello = React.createClass({
//   render: function(){
//     return(
//       <div>
//         Hello
//       </div>
//     )
//   }
// })

// ES6
class Hello extends Component {
  constructor(){
    super();
    this.state = {
      name: "Josh",
    }
  }

  render() {
    return (
      <div className="App">
        Hello! { this.state.name }
      </div>
    );
  }
}

export default Hello;
