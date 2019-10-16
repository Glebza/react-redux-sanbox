const BooksError = () => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
    }
};

const BooksLoaded = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: books
    }
};

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
};

const fetchBooks = (dispatch, service) => () => {
    dispatch(booksRequested());
    service.getBooks()
        .then((data) => dispatch(BooksLoaded(data)))
        .catch((err) => dispatch(BooksError(err)));
};

export {fetchBooks};