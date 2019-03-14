import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, Input,  Select,  TextField,} from '@material-ui/core';


class Generate extends Component {
    constructor(props){
        super(props);
        this.state={
            productType: [],
            quantity: '', 
        }
    }

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_PRODUCT_TYPE'});
    }
    // handles the change of the product type drop down menu
    changeInput = (event) => {
        console.log(event.target.name,event.target.value);
        const formName = event.target.name;
        const changeValue = event.target.value;
        this.setState({
            ...this.state,
            [formName]: changeValue,
        })
        console.log(this.state);
    }//end

    // handles the change of the quantity
    changeQunanity=(event=>{
        console.log(event.target.value);
        const inputquanity = parseInt(event.target.value);
        this.setState({
            ...this.state,
            quantity: inputquanity
        })
    })//end

    // submits the data to the productSaga to generate unique plots based on admin inputs
    submitGenerate=(event)=>{
        event.preventDefault();
        console.log(this.state);
         const action=({
             type: 'ADD_PRODUCT', payload: this.state
        });
        this.props.dispatch(action);
    }//end
                 // {JSON.stringify(this.props.products)}
                // {/* {this.props.products[0] !== undefined && JSON.stringify(this.props.products[0].id)} */}
    render() {
        return (
            <div>
              
                <FormControl name="GenerateQrCode" onSubmit={this.submitGenerate}>
                    {/* <InputLabel htmlFor="productType">Select Product</InputLabel> */}
                    <Select
                            select label="Select"
                            onChange={this.changeInput} 
                            name="productType" 
                            placeholder="Product Type" 
                            ref="form"
                            Value="" > 
                            <option >Select Product</option>
                        {this.props.products.map((product, i) => (
                            <option key={i} 
                                      value={product}>
                                      {product.product_name} 
                            </option>))}
                    </Select >
                    <TextField type="number" onChange={this.changeQunanity}  name="quantity" placeholder="Quantity" min="0" ref="form" />
                    <Input type="submit" onClick={this.submitGenerate}/>
                </FormControl>
            </div>
        );
    }
}
// maps redux to products
const mapReduxStoreToProps = reduxStore => ({
    ...reduxStore,
    products: reduxStore.productType.productTypeReducer,
});

export default connect(mapReduxStoreToProps)(Generate);