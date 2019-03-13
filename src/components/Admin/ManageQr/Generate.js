import React, { Component } from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode-react';
import { FormControl, Input, InputLabel, Select, MenuItem } from '@material-ui/core';


class Generate extends Component {
    constructor(props){
        super(props);
        this.state={
            productType: [],
            qrCodesToMake: {}, 
        }
    }

componentDidMount(){
    this.props.dispatch({type: 'FETCH_PRODUCT_TYPE'});
}

    changeInput=(event)=>{
        const formName = event.target.name;
        const changeValue = event.target.value;
        this.setState({
            ...this.state,
            [formName]: changeValue,
        })
    }

submitGenerate=(event)=>{
    event.preventDefault();
    console.log('Submit Click');
    // const action={
    //     type:
    // }
}

    render() {
        return (
            <div>
                <FormControl name="GenerateQrCode" onSubmit={this.submitGenerate}>
                    <InputLabel htmlFor="product-select">Select Product</InputLabel>
                    <Select  
                            onChange={this.changeInput} 
                            type="select" 
                            name="productType" 
                            placeholder="Product Type" 
                            ref="form" 
                            value={this.state.product}>
                        {this.props.reduxStore.product.map(product => (
                            <MenuItem key={this.props.reduxStore.productType.product.id} 
                                      value={this.props.reduxStore.productType.product.product_name}>
                                      {this.props.reduxStore.productType.product_name}
                            </MenuItem>))}
                            </Select>
                    <Input onChange={this.changeInput} type="number" name="quantity" placeholder="Quantity" ref="form" />
                    <Input type="submit" />
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