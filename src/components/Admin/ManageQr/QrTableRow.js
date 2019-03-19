import React, { Component } from 'react';
// import { connect } from 'react-redux';
import QRCode from 'qrcode-react';
import { TableCell, TableRow } from '@material-ui/core/';
import { PDFExport, } from '@progress/kendo-react-pdf';




class QrTableRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            printed: this.props.qrproduct.printed
        }
    }
    //  pdfExportComponent;

    //  exportPDFWithComponent = () => {
    //     this.pdfExportComponent.save();
    // }

    render() {
        const printedQr = this.state.printed;
        let showRow;
        if (printedQr === false){
             showRow = <TableRow><TableCell><button></button></TableCell>
                <TableCell>{this.props.qrproduct.product_name}</TableCell>
                <TableCell>{this.props.qrproduct.cost}</TableCell>
                <TableCell>{this.props.qrproduct.printed}</TableCell>
                 <TableCell><QRCode value={`localhost:3000/#/home/${this.props.qrproduct.id}`} /></TableCell></TableRow>
        }
        // {JSON.stringify(this.state.product.id)}
        return (
            <div>{showRow}</div>
            
        );
    }
}

export default QrTableRow;