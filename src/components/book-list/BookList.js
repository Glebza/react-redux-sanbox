import React, {Component} from 'react'
import './BookList.css';
import BookListItem from '../book-list-item/BookListItem';
import {connect} from 'react-redux';
import withBookService from '../hoc/withBookService';
import {booksLoaded, booksRequested} from '../../actions'
import {compose} from '../../utils/';
import Spinner from '../spinner';

class BookList extends Component {

    componentDidMount() {

        console.log(this.props);
        const {service, booksLoaded, booksRequested} = this.props;
        booksRequested();
        service.getBooks().then((data) => booksLoaded(data));

    }

    render() {
        const {books,loading} = this.props;

        if (!loading) {
            return (
                <ul className="book-list">
                    {
                        books.map((book) => {
                            return <li key={book.id}><BookListItem book={book}/></li>
                        })
                    }
                </ul>
            )
        } else {
            return (<Spinner/>);
        }


    }

}

const mapStateToProps = ({books,loading}) => {
    return {books,loading};
};
const mapDispatchToProps = {
    booksLoaded, booksRequested
};

export default compose(
    withBookService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)
;



