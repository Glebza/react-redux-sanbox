export const BooksLoaded = (books) => {
    return {
        type: 'BOOKS_LOADED',
        payload: books
    }
};