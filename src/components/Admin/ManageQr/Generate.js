import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormControl, Input, Select, TextField, InputLabel } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { withStyles } from '@material-ui/core/styles';


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

class Generate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productType: '',
            quantity: '',

        }
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PRODUCT_TYPE' });
    }

    // handles the change of the product type drop down menu
    changeInput = (event) => {
        this.setState({
            ...this.state,
            productType: event.target.value,
        })
        // console.log(event.target.name, event.target.value);
        // const formName = event.target.name;
        // const changeValue = event.target.value;
        // this.setState({
        //     ...this.state,
        //     formName: changeValue,
        // })
        // console.log(this.state);
        console.log(event.target.value, 'ewwewewee')
        console.log(this.state, '!!!!!')

    }//end

    // handles the change of the quantity
    changeQunanity = (event) => {
        console.log(event.target.value);
        const inputquanity = parseInt(event.target.value);
        this.setState({
            ...this.state,
            quantity: inputquanity
        })
    }//end


    // submits the data to the productSaga to generate unique plots based on admin inputs
    submitGenerate = (event) => {
        event.preventDefault();
        console.log(this.state);
        const action = ({
            type: 'ADD_PRODUCT', payload: this.state
        });
        this.props.dispatch(action);
    }//end

    render() {
        // const { classes } = this.props;
        return (
            <form
            autoComplete={false}>
                <TextField
                    id="select-product"
                    select
                    label="Select"
                    className="input"
                    value={this.state.productType}
                    onChange={this.changeInput}
                    helperText="product"
                    margin="normal"
                    // SelectProps={{
                    //     MenuProps: {

                    //     }
                    // }}
                >
                    {this.props.products.map((product, i) => (
                                <MenuItem key={i} 
                                          value={product}>
                                          {product.product_name} 
                                </MenuItem>))}
                        </TextField>
            </form >
        );

    }
}
// maps redux to products
const mapReduxStoreToProps = reduxStore => ({
    ...reduxStore,
    products: reduxStore.productType,
});

export default connect(mapReduxStoreToProps)(withStyles(styles)(Generate));
