import React, { Component } from 'react';


class TheForm extends React.Component {
    /**
     * 
     * @param {props} props are the values assigned to the JSX element, like <theBox testing="abcd">
     * properties can be anything, but only those specified in this constructor will actually do anything. 
     */
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    /**
     * @dev changes the state based on the input
     * @param {} event 
     */
    handleChange(event){
        this.setState({value: event.target.value});
    }

    /**
     * @dev what happens after the submit is done? 
     * @param {*} event 
     * @param this.state.value is the submitted input
     */
    handleSubmit(event){
        alert('A value was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    }




}
export default TheForm;