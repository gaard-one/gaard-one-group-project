import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { FormControl, Input,  Select,  TextField, InputLabel } from '@material-ui/core';


class Generate extends Component {
    constructor(props){
        super(props);
        this.state={
            productType: {},
            quantity: '', 
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

     displayDropDown =()=>{
        this.props.products.map((Item, i )=>(
            <option key={i}
                value={Item}>
                {Item.product_name} 
            </option>))
        }
        
              
    render(){
        return (
            <div>
                {/* {JSON.stringify(this.props.products)};
                <form name="GenerateQrCode" onSubmit={this.submitGenerate}>
                    <select
                            onChange={this.changeInput} 
                            > 
                            <option value="">Select Product</option>
                            {this.props.products.map((Item, i )=>{
                                return (
                                <option key={i} value={Item}>
                                    {Item.product_name} 
                                </option>)})}
                    </select>
                    <input type="number" onChange={this.changeQunanity}  name="quantity" placeholder="Quantity" min="0"  />
                    <input type="submit" onClick={this.submitGenerate}/> 
                </form>*/}
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