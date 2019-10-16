import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/BooksLoaded';

const Counter = ({value, inc, dec, rnd}) => {
    return (
        <div className='jumbotron'>
            <h3>{value}</h3>
            <button className="btn-primary btn-lg" onClick={inc}>INC</button>
            <button className="btn-primary btn-lg" onClick={dec}>DEC</button>
            <button className="btn-primary btn-lg" onClick={rnd}>RND</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {value: state};
};
export default connect(mapStateToProps, actions)(Counter);