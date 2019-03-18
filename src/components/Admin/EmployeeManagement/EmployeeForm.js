import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EmployeeManagement.css';

class EmployeeForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
        }

    }


    handleSubmit = (event) => {
        event.preventDefault();

        const action = {type: 'GIVE_EMPLOYEE',
                        payload: this.state};
        this.props.dispatch(action)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className={'employeeForm'}>
            <h4>Give a user employee permissions here</h4>
                <input onChange={this.handleChange} type='text' 
                    value={this.state.name||''} placeholder='User Name' name='name'/> 


                <button type='submit' value='Submit'>Submit</button>
            </form>
        );
    }
}

export default connect()(EmployeeForm);