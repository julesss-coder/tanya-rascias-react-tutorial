import React from 'react'

// Can we now put this variable definition here instead of inside Table? Reason: I want it to be accessible from all components.
// const characterData = this.props.characterData;
// simple component
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
};

// class component
// Why do I need to pass in props here, while I have access to it in Table without passing it in?
const TableBody = (props) => {
  // Render a button next to each character that can invoke the removeCharacter function
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
};

const Table = (props) => {
  // How does the ES6 property shorthand work?
  const {characterData, removeCharacter} = props;

  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />        
    </table>
  )
}


export default Table;