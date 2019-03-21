import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import './ProductEditModal.css';
import ProductEditModal from './ProductEditModal';
import { TableRow, TableCell } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'





class DeactivatedProductTableRow extends Component {

    state = {
        open: false,
    };


    handleReActivate = (event) => {
        const action = { type: 'REACTIVATE_PRODUCT_TYPE', payload: this.props.deactProducts };
        this.props.dispatch(action);
    };

    handleEditOpen = () => {
        alert('Please re-activate item to edit.');

    }

    handleEditClose = () => {
        this.setState({
            open: false,
        });
    }


    render() {
        return (
            <TableRow>
                <TableCell>
                    {this.props.deactProducts.product_name}
                </TableCell>
                <TableCell>
                    {this.props.deactProducts.cost}
                </TableCell>
                <TableCell>
                    {this.props.deactProducts.description}
                </TableCell>
                <TableCell>
                    <Edit disabled 
                          className="edit-product-type" 
                          onClick={this.handleEditOpen}>Edit</Edit>
                </TableCell>
                <TableCell>
                    <Button onClick={this.handleReActivate} >Re-Activate</Button>
                </TableCell>
            </TableRow>
        )
    }
}


export default connect()(DeactivatedProductTableRow);