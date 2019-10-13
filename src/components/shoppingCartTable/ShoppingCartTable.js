import React from 'react';
import './ShoppingCartTable.css';

const ShoppingCartTable = () => {

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>2</td>
                <td>Chanel Glory</td>
                <td>$3400</td>
                <td>1</td>
                <td>
                    <button className="btn btn-outline-danger btn-sm "><i className="fa fa-trash-o"/></button>
                    <button className="btn btn-outline-success btn-sm"><i className="fa fa-plus-circle"/></button>
                    <button className="btn btn-outline-warning btn-sm"><i className="fa fa-minus-circle"/></button>
                </td>
                </tr>
                </tbody>


            </table>
            <div className="total">
                Total: $6800
            </div>
        </div>
    )
};

export default ShoppingCartTable;