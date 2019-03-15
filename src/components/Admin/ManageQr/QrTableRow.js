import React, { Component } from 'react';
// import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';



class QrTableRow extends Component {
    render() {
        return (
           <TableRow>
               <TableCell>{this.props.product_name}</TableCell>
               <TableCell>{this.props.product_name}</TableCell>
               <TableCell>{this.props.product_name}</TableCell>
               <TableCell>{this.props.product_name}</TableCell>
               <TableCell>{this.props.product_name}</TableCell>
           </TableRow>
        );
    }
}

export default QrTableRow;