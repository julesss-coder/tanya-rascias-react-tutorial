import React from 'react'

class Form extends React.Component {
  // Previously, it was necessary to include a constructor() on React class components, but it's not required anymore.
  initialState = {
    name: '',
    job: '',
  }

  state = this.initialState;

  // Our goal for this form will be to update the state of Form every time a field is changed in the form
  // When we submit, all that data will pass to the App state, which will then update the Table.
  // First, we'll make the function that will run every time a change is made to an input. 
  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  }

  submitForm = () => {
    // pass the Form state through as the character parameter we defined earlier
    this.props.handleSubmit(this.state);
    // reset the state to the initial state, to clear the form after submit.
    this.setState(this.initialState);
  }

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input 
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    )
  }
}

export default Form;

