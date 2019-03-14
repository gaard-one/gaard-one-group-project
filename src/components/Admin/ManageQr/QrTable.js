import React, { Component } from 'react';
import { connect } from 'react-redux';
// import QRCode from 'qrcode-react';
// import axios from './axios';


class Admin extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }

    componentDidMount(){
        this.props.dispatch({type:'FETCH_PRODUCT'});
    }



    render() {
    {JSON.stringify(this.props.reduxStore)};
    
        return (
         
            <div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>QR Printed</th>
                                <th>Print</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        );
    }
}
const mapReduxStoreToProps = reduxStore => ({
    ...reduxStore,
});

export default connect(mapReduxStoreToProps)(Admin);