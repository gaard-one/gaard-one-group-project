import React, { Component } from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode-react';


class QrCodeGenerator extends Component {
    constructor(props){
        super(props);
        this.state={
            qrCodeArray: [],
        }
    };
    
   createQrCode=()=>{
       
   }
    
    render() {
        //these need the URL for the site and the ID data for the get 
        let baseUrl="";
        let data="";
        return (
            <div>
                 <QRCode
                     value=""
                     size={128}
                     level={'M'}
                     />,
 
            </div>
        );
    }
}

export default connect()(QrCodeGenerator);