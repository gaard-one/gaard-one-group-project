import React, { Component } from 'react';
import { Input, FormControl, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});



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
                <FormControl margin="normal" className="form-control">
                    <TextField
                        autoComplete
                        required
                        helperText="Product Name"
                        onChange={this.handleProductName}></TextField>
                    <TextField
                        required
                        autoComplete
                        helperText="Cost"
                        onChange={this.handleCost}></TextField>
                    <TextField
                        required
                        autoComplete
                        helperText="Description"
                        rows={4}
                        onChange={this.handleDescription}></TextField>
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}>
                    Add New Product
                        </Button>
    
                </FormControl>

            </div>
        )
    }
}
export default connect()(withStyles(styles)(ProductForm));