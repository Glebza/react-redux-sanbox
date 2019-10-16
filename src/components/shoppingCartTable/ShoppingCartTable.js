import React from 'react';
import './ShoppingCartTable.css';
import {connect} from 'react-redux';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {

    const renderRow = (item, idx) => {
        const {id,title, count, total} = item;
        return <tr key={idx}>
            <td>{idx+1}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>${total}</td>
            <td>
                <button className="btn btn-outline-danger btn-sm " onClick={()=>onDelete(id)}><i className="fa fa-trash-o"/></button>
                <button className="btn btn-outline-success btn-sm" onClick={()=>onIncrease(id)}><i className="fa fa-plus-circle"/></button>
                <button className="btn btn-outline-warning btn-sm" onClick={()=>onDecrease(id)}><i className="fa fa-minus-circle"/></button>
            </td>
        </tr>;
    };

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map(renderRow)

                }
                </tbody>


            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
};

const mapStateToProps = ({cartItems,cartTotal}) => {

    return {items: cartItems, total: cartTotal}
};
const mapDispatchToProps = () => {
    return (
        {
            onIncrease: (id) => {
                console.log(`increase ${id}`)
            },
            onDecrease: (id) => {
                console.log(`decrease ${id}`)
            },
            onDelete: (id) => {
                console.log(`delete ${id}`)
            }
        }
    )


};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);