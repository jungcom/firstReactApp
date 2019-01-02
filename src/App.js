import React, { Component } from 'react';
import './App.css';
import Person from './Person'

class App extends Component {
  //state is a given attribute for Component classes. we use this because when the state is changed, the render() call gets called
  state = {
    persons: [
      {name : 'Alex', age: 28},
      {name : 'Bob', age: 24},
      {name : 'Steve', age: 20}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name : newName, age: 29},
        {name : 'Bob', age: 24},
        {name : 'Steve', age: 20}
      ]
    })
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        {name : event.target.value, age: 29},
        {name : 'Bob', age: 24},
        {name : 'Steve', age: 20}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <button onClick={() => this.switchNameHandler("Maxmilian")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Max")}
          changed={this.nameChangedHandler}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}>I like to ride a bike</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
