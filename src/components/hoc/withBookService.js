import React from 'react';
import BookStoreService from "../../services/BookStoreService";

const withBookService = () => (Wrapped) =>{

    return (props) =>{
        let service = new BookStoreService();
      //  const serviceMethods = mapMethodsToProps(service);
       return (<Wrapped {...props} service={service} />)
    }
};
export default withBookService;