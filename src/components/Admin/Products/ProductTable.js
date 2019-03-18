import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductTableRow from './ProductTableRow';


class ProductTable extends Component {

    componentDidMount() {
        this.getProductTypeItems();
    }
    
    getProductTypeItems = () => {
        const action = { type: 'FETCH_PRODUCT_TYPE' };
        this.props.dispatch(action);
    }

    render() {

        const activeProducts = this.props.products.filter( (product) => product.active);

        return (
            <div>
                <div>
                 {/* This is needed for id */}
                    {/* {this.props.state.productType.productTypeReducer[0] !== undefined && JSON.stringify(this.props.state.productType.productTypeReducer[0].id)} */}
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Edit</th>
                                <th>Set Inactive</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {activeProducts.map((productTypeItem, i) => {
                                    return (
                                        <ProductTableRow productTypeItem={productTypeItem} key={i} />
                                    )
                                })}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => ({
    products: state.productType,
})

export default connect(mapStatetoProps)(ProductTable);