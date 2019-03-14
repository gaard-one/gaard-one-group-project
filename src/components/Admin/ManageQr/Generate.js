import React, { Component } from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode-react';
import { FormControl, Input, InputLabel, Select, MenuItem } from '@material-ui/core';


class Generate extends Component {
    constructor(props){
        super(props);
        this.state={
            qrProductType: [],
            qrCodesToMake: [], 
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
        console.log('Submit Click');
    //      const action={
    //          type:
    //  }
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props.products)}
                {/* {this.props.products[0] !== undefined && JSON.stringify(this.props.products[0].id)} */}
                <FormControl name="GenerateQrCode" onSubmit={this.submitGenerate}>
                    <InputLabel htmlFor="product-select">Select Product</InputLabel>
                    <Select  
                            onChange={this.changeInput} 
                            type="select" 
                            name="qrProductType" 
                            placeholder="Product Type" 
                            ref="form" >
                        {this.props.products.map((product, i) => (
                            <MenuItem key={i} 
                                      value={product.cost}>
                                      {product.product_name} 
                            </MenuItem>))}
                    </Select>
                    <Input onChange={this.changeInput} type="number" name="qrCodesToMake" placeholder="Quantity" ref="form" />
                    <Input type="submit" onClick={this.submitGenerate}/>
                </FormControl>
            </div>
        );
    }
}

const mapReduxStoreToProps = reduxStore => ({
    ...reduxStore,
    products: reduxStore.productType.productTypeReducer,
});

export default connect(mapReduxStoreToProps)(Generate);