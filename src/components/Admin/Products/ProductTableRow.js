import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import './ProductEditModal.css';
import ProductEditModal from './ProductEditModal';
import { TableRow, TableCell } from '@material-ui/core';
import Button from '@material-ui/core/Button';




class ProductTableRow extends Component {

    state = {
        open: false,
    };

    handleDelete = (event) => {
        const action = { type: 'DELETE_PRODUCT_TYPE', payload: this.props.productTypeItem };
        this.props.dispatch(action);
    }

    handleEditOpen = () => {
        this.setState({
            open: true,
        });
        
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
                    {this.props.productTypeItem.product_name}
                </TableCell>
                <TableCell>
                    {this.props.productTypeItem.cost}
                </TableCell>
                <TableCell>
                    {this.props.productTypeItem.description}
                </TableCell>
                <TableCell>
                    <Button className="edit-product-type" onClick={this.handleEditOpen}>Edit</Button>
                    <Modal open={this.state.open} onClose={this.handleEditClose} className="bg-modal">
                        <div className="modal-content">
                            <ProductEditModal handleEditClose={this.handleEditClose} id={this.props.productTypeItem.id} />
                        </div>
                    
                    </Modal>
                </TableCell>
                <TableCell>
                    <Button onClick={this.handleDelete}>Delete</Button>
                </TableCell>
            </TableRow>
        )
    }
}

export default connect()(ProductTableRow);