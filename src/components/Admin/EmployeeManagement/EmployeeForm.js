import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EmployeeManagement.css';
import { FormControl, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
            <FormControl onSubmit={this.handleSubmit} className={'employeeForm'}>
            <h4>Give a user employee permissions here</h4>
                <TextField onChange={this.handleChange} type='text' 
                    value={this.state.name||''} placeholder='User Name' name='name'/> 


                <Button onClick={this.handleSubmit} value='Submit'>Submit</Button>
            </FormControl>
        );
    }
}

export default connect()(EmployeeForm);