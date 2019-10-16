import React from 'react'
import BookListContainer from "../../containers/book-list-container/BookListContainer";
import ShoppingCartTable from "../shoppingCartTable";
const HomePage = () => {
    return (
        <div>
            <BookListContainer/>
            <ShoppingCartTable/>
        </div>

    );
};
export default HomePage;