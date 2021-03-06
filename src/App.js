import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'
import './Person/Person.css'

class App extends Component {
  //state is a given attribute for Component classes. we use this because when the state is changed, the render() call gets called
  
  state = {
    persons: [
      {id : 'suy8f', name : 'Alex', age: 28},
      {id : 'suy8f123', name : 'Bob', age: 24},
      {id : 'suy8f125fd', name : 'Steve', age: 20}
    ],
    otherstate : 'some other value',
    showPersons : false
  }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex( p => {
        return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  togglepersonHandler = () =>{
    const show = this.state.showPersons;
    this.setState({showPersons : !show});
  }

  render() {
    const style= {
      backgroundColor:'green',
      font : 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click={()=>this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event,person.id)}
            />
          })}
        </div>
      );

      style.backgroundColor = 'red'
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.App}>
          <h1>Hi</h1>
          <p className={assignedClasses.join(' ')}>This really works!!</p>
          <button style={style} onClick={this.togglepersonHandler}>Switch Name</button>
          {persons}
        </div>
    );
  }
}

export default App;
