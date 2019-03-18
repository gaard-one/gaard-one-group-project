import React, { Component } from 'react';
import { Input, FormControl, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import ProductTable from './ProductTable'

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            cost: '',
            description: '',
        }
    }
    

    handleSubmit = () => {
        const action = { type: 'ADD_PRODUCT_TYPE', payload: this.state}
        this.props.dispatch(action);
    }

    handleProductName = (event) => {
        this.setState({
            ...this.state,
            product_name: event.target.value,
        })
    }

    handleCost = (event) => {
        this.setState({
            ...this.state,
            cost: event.target.value,
        })
    }

    handleDescription = (event) => {
        this.setState({
            ...this.state,
            description: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <FormControl onClick={this.handleSubmit} margin="normal">
                    <TextField
                        autoComplete
                        required
                        placeholder="Product Name"
                        onChange={this.handleProductName}></TextField>
                    <TextField
                        required
                        autoComplete
                        placeholder="Cost"
                        onChange={this.handleCost}></TextField>
                    <TextField
                        required
                        autoComplete
                        placeholder="Description"
                        rows={4}
                        onChange={this.handleDescription}></TextField>
                    <TextField
                        type="submit"
                        value="Add New Product"
                            />

                </FormControl>

            </div>
        )
    }
}
export default connect()(ProductForm);