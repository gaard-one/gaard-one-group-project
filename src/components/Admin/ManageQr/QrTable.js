import React, { Component, forwardRef, useRef, } from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Button} from '@material-ui/core';
import { withRouter } from "react-router";
import QrTableRow from './QrTableRow';
import './PrintQr.css';
import PrintQr from './PrintQr';
import QrPdfExport from './QrPdfExport';
import { PDFExport,  } from '@progress/kendo-react-pdf';

class QrTable extends Component {
    pdfExportComponent;

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PRODUCT' });
    }

    exportPDFWithComponent=()=>{
        this.pdfExportComponent.save();
    }

    printQr=()=>{
        window.print();
    }
    
    render() {

        const qrRowsUnprinted = this.props.reduxStore.product.filter((product)=>{
            return product.printed === false;
        })

        return (
        <div>
            <div>
                <Button variant="contained" color="primary" style={{backgroundcolor:"#647c36"}} className="exportPdfBtn" onClick={this.exportPDFWithComponent} >Export to PDF</Button>
                <Button variant="contained" color="primary" onClick={this.printQr} className="printBtn" >PRINT</Button>
            <br />

            <Paper className="qrTable">
             {/* {JSON.stringify(this.props.reduxStore.product)}; */}
             
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell>Square Feet</TableCell>
                            <TableCell>QR Printed</TableCell>
                            <TableCell>Qr Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxStore.product.map((qrProduct,i)=>(
                        <QrTableRow key={i} qrproduct={qrProduct} />))}
                    </TableBody>
                </Table>
            </Paper>
            </div>
            <div className="printHidden" style={{ position: "absolute", left: "-1000px", top: 0,  }}>
                <PrintQr />
            </div>
            <div className="pdfExport" style={{ position: "absolute", left: "-5000px", top: 0,  }}>
                <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize={'Letter'} > 
                    <QrPdfExport />
                </PDFExport>
            </div>
        </div>
        );
    }
}
const mapReduxStoreToProps = reduxStore => ({ reduxStore });
export default withRouter(connect(mapReduxStoreToProps)(QrTable));