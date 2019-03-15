import React, { Component } from 'react';
import { connect } from 'react-redux';


class ProductTableRow extends Component {

    handleDelete = (event) => {
        const action = { type: 'DELETE_PRODUCT_TYPE', payload: this.props.productTypeItem };
        this.props.dispatch(action);
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
                    <button>Edit</button>
                </td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default connect()(ProductTableRow);