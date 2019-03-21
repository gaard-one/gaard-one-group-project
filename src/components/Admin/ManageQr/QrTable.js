import React, { Component, forwardRef, useRef, } from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Button} from '@material-ui/core';
import { withRouter } from "react-router";
import QrTableRow from './QrTableRow';
import './PrintQr.css';
import PrintQr from './PrintQr';

class QrTable extends Component {
    

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PRODUCT' });
    }

    // handleOpen(){
    //     this.setState({hidePrint: false});
    //     console.log(this.state, 'Open Print') 
        
    // }

    // handleClose(){
    //     this.setState({hidePrint: true});
    //     console.log(this.state, 'Close Print')
    // }

    exportPDFWithComponent=()=>{
        this.handleChange();
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
        <Button variant="contained" style={{backgroundcolor:"#647c36"}} className="exportPdfBtn" onClick={this.handleOpen} >Export QR to PDF</Button>
        <Button variant="contained" color="primary"onClick={this.printQr} className="Button" >PRINT</Button>
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
         <div className="printHidden" >
         
             <PrintQr />
         </div>
        </div>
        );
    }
}
const mapReduxStoreToProps = reduxStore => ({ reduxStore });
export default withRouter(connect(mapReduxStoreToProps)(QrTable));