import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import './Person/Person.css'

class App extends Component {
  //state is a given attribute for Component classes. we use this because when the state is changed, the render() call gets called
  
  state = {
    persons: [
      {name : 'Alex', age: 28},
      {name : 'Bob', age: 24},
      {name : 'Steve', age: 20}
    ],
    otherstate : 'some other value',
    showPersons : false
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

  togglepersonHandler = () =>{
    const show = this.state.showPersons;
    this.setState({showPersons : !show});
  }

  render() {
    const style= {
      backgroundColor:'white',
      font : 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
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
    }

    return (
      <div className="App">
        <h1>Hi</h1>
        <button style={style} onClick={this.togglepersonHandler}>Switch Name</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
