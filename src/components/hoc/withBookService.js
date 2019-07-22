import React from 'react';
import BookStoreService from "../../services/BookStoreService";

const withBookService = (mapMethodsToProps) => (Wrapped) =>{

    return (props) =>{
        let service = new BookStoreService();
        const serviceMethods = mapMethodsToProps(service);
       return (<Wrapped {...props} {...serviceMethods} />)
    }
};
export default withBookService;