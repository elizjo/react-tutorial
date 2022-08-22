import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.initialState = {
            name: '',
            job: '',
        };
        
        this.state = this.initialState;

    }

    // updates Form state when field is changed
    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    // pass the Form state through as character parm set earlier
    // using latest version on Github
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }


    render() {
        // get two properties from state
        // use as form keys
        const { name, job } = this.state;

        return (
            <form onSubmit = {this.onFormSubmit}>
                <label for="name">Name</label>
                <input
                    type="text"
                    name = "name"
                    id= "name"
                    value= {name}
                    onChange={this.handleChange} />
                <label for ="job">Job</label>
                <input 
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <button type = "submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;