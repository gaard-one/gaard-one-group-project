import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import './ProductEditModal.css';
import ProductEditModal from './ProductEditModal';



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
            <tr>
                <td>
                    {this.props.productTypeItem.product_name}
                </td>
                <td>
                    {this.props.productTypeItem.cost}
                </td>
                <td>
                    {this.props.productTypeItem.description}
                </td>
                <td>
                    <button className="edit-product-type" onClick={this.handleEditOpen}>Edit</button>
                    <Modal open={this.state.open} onClose={this.handleEditClose} className="bg-modal">
                        <div className="modal-content">
                            <ProductEditModal handleEditClose={this.handleEditClose} id={this.props.productTypeItem.id} />
                        </div>
                    
                    </Modal>
                </td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default connect()(ProductTableRow);