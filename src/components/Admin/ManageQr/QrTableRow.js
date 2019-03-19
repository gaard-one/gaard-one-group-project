import React, { Component } from 'react';
// import { connect } from 'react-redux';
import QRCode from 'qrcode-react';
import {TableCell, TableRow } from '@material-ui/core/';
import { PDFExport,  } from '@progress/kendo-react-pdf';




class QrTableRow extends Component {
//  pdfExportComponent;

//  exportPDFWithComponent = () => {
//     this.pdfExportComponent.save();
// }

    printedLogic = () => {
        if(this.props.qrproduct.printed){
            return <TableCell>Printed</TableCell>
        }else{
            return <TableCell> Not Printed</TableCell>

        }
    }

    render() {
        // {JSON.stringify(this.state.product.id)}
        return (
           <TableRow>
               <TableCell>{this.props.qrproduct.product_name}</TableCell>
               <TableCell>{this.props.qrproduct.cost}</TableCell>
               {this.printedLogic()}               
                    <TableCell><QRCode value={`localhost:3000/#/home/${this.props.qrproduct.id}`} /></TableCell>
           
           </TableRow>
        );
    }
}

export default QrTableRow;