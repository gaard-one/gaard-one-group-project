import React, { Component } from 'react';
// import QRCode from 'qrcode-react';
// import axios from './axios';


class Admin extends Component {
    constructor(props){
        super(props);
        this.state={
            qrProductType: [],
            qrCodesToMake: [], 
        }
    }



    render() {
    
    
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
export default Admin;