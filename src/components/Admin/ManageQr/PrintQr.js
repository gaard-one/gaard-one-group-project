import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import Button from '@material-ui/core/Button';
import QRCode from 'qrcode-react';
import './PrintQr.css';
const API_KEY = process.env.API_KEY;



class PrintQr extends Component {
    pdfExportComponent;
    
    componentDidMount(){
        this.props.dispatch({type:'FETCH_PRODUCT'});
        
    }

    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
        this.props.history.push('/admin')
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
                            <QRCode value={`${API_KEY}${qrProduct.id}`}  size={55} className="labelQr"/>
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