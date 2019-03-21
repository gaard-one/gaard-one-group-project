import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Button} from '@material-ui/core';
import { withRouter } from "react-router";
import QrTableRow from './QrTableRow';
import './PrintQr.css';



class QrTable extends Component {
    pdfExportComponent;
    constructor(props) {
        super(props);
        // const qrRowsUnprinted = this.props.reduxStore.product.map((product) => {
        //     return product;
        // })
        this.state = {
            value: '1',
            // qrRows: this.props.reduxStore
        }


    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PRODUCT' });
    }

    confirmPrint = () => {
        this.props.history.push('/PrintQr');
    }

    tableViewChange = (event) => {
        console.log('in tableviewchange', this.state)
        if (event.target.value === '1') {
            this.setState({
                value: event.target.value
            })
        } else if (event.target.value === '2') {
            this.setState({
                value: event.target.value
            })
        } else if (event.target.value === '3') {
            this.setState({
                value: event.target.value
            })
        }
    }

    showTable = () => {
        let qrRows = this.props.reduxStore.product;
        if (this.state.value === '1') {
            return qrRows.map((qrProduct, i) => (
                <QrTableRow key={i} qrproduct={qrProduct} />
            ));
        } else if (this.state.value === '2') {
            const printedProducts = qrRows.filter((product) => product.printed);
            return printedProducts.map((qrProduct, i)=>(
                <QrTableRow key={i} qrproduct={qrProduct} />
            ))
        } else if (this.state.value === '3') {
            const printedProducts = qrRows.filter((product) => !product.printed);
            return printedProducts.map((qrProduct, i) => (
                <QrTableRow key={i} qrproduct={qrProduct} />
            ))
        }
    }

    render() {
        // const qrRowsUnprinted = this.props.reduxStore.product.filter((product)=>{
        //     return product.printed === false;

        // let qrRows = this.props.reduxStore.product;
        // if (this.state.value == '1') {
        //     return qrRows;
        // } else if (this.state.value == '2') {
        //     qrRows = this.props.reduxStore.product.filter((product) => {
        //         return product.printed === true;
        //     })
        // } else if (this.state.value == '3') {
        //     qrRows = this.props.reduxStore.product.filter((product) => {
        //         return product.printed === false;
        //     })
        // } else {
        //     return qrRows;
        // }
        // })
        // const qrRowsPrinted = this.props.reduxStore.product.filter((product) => {
        //     return product.printed === true;
        // })

        return (
            // <Paper>
            //     {/* {JSON.stringify(this.state)}; */}

            //     <Table>
            //         <TableHead>
            //             <TableRow>
            //                 <TableCell><select onChange={this.tableViewChange} value={this.state.value}>
            //                     {/* <option value='1'>Select Table View</option> */}
            //                     <option value='1'>Show all QR codes</option>
            //                     <option value='2'>Show printed QR codes</option>
            //                     <option value='3'>Show unprinted QR codes</option>
            //                 </select></TableCell>
            //                 <TableCell>Product</TableCell>
            //                 <TableCell>Square Feet</TableCell>
            //                 <TableCell>QR Printed</TableCell>
            //                 <TableCell><button onClick={this.exportPDFWithComponent}>Export QR to PDF</button></TableCell>
            //             </TableRow>
            //         </TableHead>

            //         <TableBody>
            //             {this.showTable()}

            //         </TableBody>

            //     </Table>
            // </Paper>
        <div>
                <Button variant="contained" color={('#647c36')} style={{ margin: '20px' }} size='small' className="exportPdfBtn" onClick={this.confirmPrint} >Export QR to PDF</Button>
        <br />

         <Paper>
             {/* {JSON.stringify(this.props.reduxStore.product)}; */}
             
             <Table>
                 <TableHead>
                     <TableRow>
                         <TableCell><select onChange={this.tableViewChange} value={this.state.value}>
                                {/* <option value='1'>Select Table View</option> */}
                                <option value='1'>Show all QR codes</option>
                                <option value='2'>Show printed QR codes</option>
                                <option value='3'>Show unprinted QR codes</option>
                            </select></TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Square Feet</TableCell>
                        <TableCell>QR Printed</TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>

                           {this.showTable()}

                 </TableBody>
             </Table>
         </Paper>
         </div>
        );
    }
}
const mapReduxStoreToProps = reduxStore => ({ reduxStore });
export default withRouter(connect(mapReduxStoreToProps)(QrTable));