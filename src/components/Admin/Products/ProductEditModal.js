import React, { Component } from 'react';
import { Input, FormControl } from '@material-ui/core';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class ProductEditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            product_name: '',
            cost: '',
            description: '',
        }
    }


    handleUpdateSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'UPDATE_PRODUCT_TYPE', payload: this.state }
        this.props.dispatch(action);
        this.handleResetForm();
    }

    handleResetForm = () => {
        this.setState({
            product_name: '',
            cost: '',
            description: '',
        });
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
                <h2>Edit</h2>
                <FormControl margin="normal">
                    <Input
                        autoComplete
                        required
                        placeholder="Product Name"
                        onChange={this.handleProductName}></Input>
                    <Input
                        required
                        autoComplete
                        placeholder="Cost"
                        onChange={this.handleCost}></Input>
                    <Input
                        required
                        autoComplete
                        placeholder="Description"
                        rows={4}
                        onChange={this.handleDescription}></Input>
                    <Input type="button"
                        onClick={this.handleUpdateSubmit}
                        value="Update Product" />

                </FormControl>

                <Button onClick={this.props.handleEditClose}>Close</Button>
            </div>
        )
    }
};

export default connect()(ProductEditModal);