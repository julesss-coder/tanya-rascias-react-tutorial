import React from 'react'
import Table from './Table'
import Form from './Form'

class App extends React.Component { 
  // Create a state object
  state = {
    // The state object contains properties for everthing you want to store in the state
    characters: [],
  };

  removeCharacter = (index) => {
    // Retrieve the state
    // Checking if this works without ES6 methods
    const characters = this.state.characters;

    // Update the state
    // You must use this.setState() to modify an array. Simply applying a new value to this.state.property will not work.
    this.setState({
      // filter does not mutate but rather creates a new array, and is a preferred method for modifying arrays in JavaScript.
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = (character) => {
    // characters is an array, but individual elements are expected
    // MDN: Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
    // MDN: The spread syntax is commonly used when you want to add a new item to a local data store, or display all stored items plus a new addition. A very simple version of this kind of action could look like so:
    // let numberStore = [0, 1, 2];
    // let newNumber = 12;
    // numberStore = [...numberStore, newNumber];

    // how many and what kind of arguments does setSate() expect?

    this.setState({characters:[...this.state.characters, character]});
  }
  // A class component must include render(), and the return can only return one parent element.
  render() {
    const characters = this.state.characters;

    // pass the removeCharacter function through as a prop to Table component
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App