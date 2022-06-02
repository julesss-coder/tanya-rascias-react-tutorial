import React from 'react'
import Table from './Table'

class App extends React.Component { 
  // Create a state object
  state = {
    // The state object contains properties for everthing you want to store in the state
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
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
  // A class component must include render(), and the return can only return one parent element.
  render() {
    const characters = this.state.characters;

    // pass the removeCharacter function through as a prop to Table component
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }
}

export default App