import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, Input, InputLabel, Select, MenuItem } from '@material-ui/core';


class Generate extends Component {
    constructor(props){
        super(props);
        this.state={
            productType: [],
            quantity: [], 
        }
    }

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_PRODUCT_TYPE'});
    }

    changeInput = (event) => {
        console.log(event.target.name,event.target.value);
        const formName = event.target.name;
        const changeValue = event.target.value;
        this.setState({
            ...this.state,
            [formName]: changeValue,
        })
        console.log(this.state);
    }

    submitGenerate=(event)=>{
        event.preventDefault();
        console.log(this.state);
         const action=({
             type: 'ADD_PRODUCT', payload: this.state
        });
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props.products)}
                {/* {this.props.products[0] !== undefined && JSON.stringify(this.props.products[0].id)} */}
                <FormControl name="GenerateQrCode" onSubmit={this.submitGenerate}>
                    {/* <InputLabel htmlFor="productTypeCost">Select Product</InputLabel> */}
                    <Select  
                            onChange={this.changeInput} 
                           
                            name="productType" 
                            // placeholder="Product Type" 
                            ref="form" >
                        {this.props.products.map((product, i) => (
                            <MenuItem key={i} 
                                      value={product}>
                                      {product.product_name} 
                            </MenuItem>))}
                    </Select>
                    <Input onChange={this.changeInput} type="number" name="quantity" placeholder="Quantity" ref="form" />
                    <Input type="submit" onClick={this.submitGenerate}/>
                </FormControl>
            </div>
        );
    }
}

const mapReduxStoreToProps = reduxStore => ({
    ...reduxStore,
    products: reduxStore.productType,
});

export default connect(mapReduxStoreToProps)(Generate);