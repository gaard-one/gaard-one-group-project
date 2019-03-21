import React, { Component } from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode-react';
import './PrintQr.css';

/*
***  Change the base URL to the domain name used
*/
const BASE_URL = 'https://polar-eyrie-86048.herokuapp.com/#/home/';
/*
***
*/

class PrintQr extends Component {
    
    
    componentDidMount(){
        this.props.dispatch({type:'FETCH_PRODUCT'});
        
    }
  
    
    render() {
        
        return (
            
            <div> 
              
                
                        {this.props.reduxStore.product.map((qrProduct,i)=>(
                            <div class="qrPrint" key={i}>
                            <QRCode value={`${BASE_URL}${qrProduct.id}`}  size={55} level="m" />
                               <p className="labelName">{qrProduct.product_name}</p> 
                            </div> ))} 
         
            </div>
            
        );
    }
}
const mapReduxStoreToProps = reduxStore => ({reduxStore});
export default connect(mapReduxStoreToProps,)(PrintQr);