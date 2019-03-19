import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import Button from '@material-ui/core/Button';
import QRCode from 'qrcode-react';
import './PrintQr.css';



class PrintQr extends Component {
    pdfExportComponent;
    
    componentDidMount(){
        this.props.dispatch({type:'FETCH_PRODUCT'});
        
    }

    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
    }

    //view 
    // qrPrintDiv() {
    //     {this.props.reduxStore.product.map((qrProduct,i)=>(
    //         <div class="qrPrint">
    //             <QRCode value={`localhost:3000/#/home/${this.props.qrproduct}`}  />
    //             {this.props.qrproduct.product_name}
    //         </div> ))
    //     }
    // }
    

    render() {
        return (
            
            <div>
                <Button onClick={this.exportPDFWithComponent}>Export PDF</Button>
                <div class="labelPageTemplate">
                <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize={'Letter'} > 
                        {this.props.reduxStore.product.map((qrProduct,i)=>(
                            <div class="qrPrint">
                            <QRCode value={`localhost:3000/#/home/${qrProduct.id}`}  />
                               <p>{qrProduct.product_name}</p> 
                            </div> ))} 
                </PDFExport>
                </div>
            </div>
            
        );
    }
}
const mapReduxStoreToProps = reduxStore => ({reduxStore});
export default connect(mapReduxStoreToProps,)(PrintQr);