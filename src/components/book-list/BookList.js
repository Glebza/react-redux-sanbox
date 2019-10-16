import React from "react";
import BookListItem from "../book-list-item";

const BookList = ({bags}) => {
    console.log(bags);
    return (
        <ul className="book-list">
            {
                bags.map((bag) => {
                    return <li key={bag.id}><BookListItem bag={bag}/></li>
                })
            }
        </ul>
    )
        ;
};


export default BookList;