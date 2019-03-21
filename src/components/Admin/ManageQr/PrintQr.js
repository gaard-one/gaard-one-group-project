import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PDFExport,  } from '@progress/kendo-react-pdf';
import Button from '@material-ui/core/Button';
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
    pdfExportComponent;
    
    componentDidMount(){
        this.props.dispatch({type:'FETCH_PRODUCT'});
        
    }

    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
        // this.props.history.push('/admin')
    }
    
    render() {
        
        return (
            
            <div class="labelPageTemplate"> 
                <Button variant="contained" color="primary"onClick={this.exportPDFWithComponent} className="Button" >Export PDF</Button>
                <Button variant="contained" color="primary"onClick={() => window.print()} className="Button" >PRINT</Button>
               
                <div >
                <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize={'Letter'} > 
                        {this.props.reduxStore.product.map((qrProduct,i)=>(
                            <div class="qrPrint">
                            <QRCode value={`${BASE_URL}${qrProduct.id}`}  size={55} className="labelQr"/>
                               <p className="labelName">{qrProduct.product_name}</p> 
                            </div> ))} 
                </PDFExport>
                </div>
            </div>
            
        );
    }
}
const mapReduxStoreToProps = reduxStore => ({reduxStore});
export default connect(mapReduxStoreToProps,)(PrintQr);