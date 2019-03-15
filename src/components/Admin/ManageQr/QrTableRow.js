import React, { Component } from 'react';
// import { connect } from 'react-redux';
import QRCode from 'qrcode-react';
import {TableCell, TableRow } from '@material-ui/core/';




class QrTableRow extends Component {


    render() {
        // {JSON.stringify(this.state.product.id)}
        return (
           <TableRow>
               <TableCell>{this.props.product.product_name}</TableCell>
               <TableCell>{this.props.product.cost}</TableCell>
               <TableCell>{this.props.product.printed}</TableCell>
               <TableCell><QRCode value={`localhost:3000/#/home/${this.props.product.id}`} /></TableCell>
               <TableCell>Delete Icon here</TableCell>
           </TableRow>
        );
    }
}

export default QrTableRow;