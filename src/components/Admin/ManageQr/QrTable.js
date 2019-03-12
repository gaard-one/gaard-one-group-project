import React, { Component } from 'react';


class Admin extends Component {
    render() {
        return (
            <div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>QR Printed</th>
                                <th>Print</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        );
    }
}
export default Admin;