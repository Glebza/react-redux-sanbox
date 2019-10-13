import React from 'react'
import BookList from "../book-list/BookList";
import ShoppingCartTable from "../shoppingCartTable";
const HomePage = () => {
    return (
        <div>
            <BookList/>
            <ShoppingCartTable/>
        </div>

    );
};
export default HomePage;