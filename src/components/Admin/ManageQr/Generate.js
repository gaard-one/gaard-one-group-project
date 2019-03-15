import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl,  Select,  Button, InputLabel, MenuItem, } from '@material-ui/core';


class Generate extends Component {
    constructor(props){
        super(props);
        this.state={
            productType: {},
            quantity: '', 
            open: false,
        }
    }

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_PRODUCT_TYPE'});
    }

    // handles the change of the product type drop down menu
    changeInput = (event) => {
        console.log(event.target.name,event.target.value);
        console.log(event.target)
        const changeValue = event.target.value;
        this.setState({
                ...this.state,
                productType: changeValue,
        })
       
    }//end

    // handles the change of the quantity
    changeQunanity = (event) => {
        console.log(event.target.value);
        const inputquanity = parseInt(event.target.value);
        this.setState({
                ...this.state,
                quantity: inputquanity
        });
    };//end

    // submits the data to the productSaga to generate unique plots based on admin inputs
    submitGenerate = (event) => {
        event.preventDefault();
        console.log(this.state);
         const action=({
             type: 'ADD_PRODUCT', payload: this.state
        });
        this.props.dispatch(action);
    }//end

    
        handleClose = () => {
            this.setState({ open: false });
          };
        
          handleOpen = () => {
            this.setState({ open: true });
          };
              
    render(){
        return (
            
            <form autoComplete="off">
                {/* <Button  onClick={this.handleOpen}>
                     Open the select
                </Button>
                <FormControl >
                    <InputLabel htmlFor="demo-controlled-open-select">Select Product</InputLabel>
                <Select
                    open={this.state.open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                     value={this.state.age}
                    onChange={this.handleChange}
                    inputProps={{
                    name: 'selectProduct',
                    id: 'demo-controlled-open-select',
                    }}
                >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {this.props.products.map((Item, i )=>{
                    <MenuItem key={i} value={Item}>
                        {Item.product_name}
                </MenuItem>})}
                
              </Select>
            </FormControl> */}
          </form>
        //    
        )
    }
}
// maps redux to products
const mapReduxStoreToProps = reduxStore => ({
    ...reduxStore,
    products: reduxStore.productType,
});

export default connect(mapReduxStoreToProps)(Generate);