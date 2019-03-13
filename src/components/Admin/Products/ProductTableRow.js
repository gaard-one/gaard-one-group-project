import React, { Component } from 'react';


class ProductTableRow extends Component {
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
                    <button>Delete</button>
                </td>
            </tr>
        )
    }
}

export default ProductTableRow;