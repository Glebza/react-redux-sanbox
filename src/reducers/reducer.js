const initialState = {
    bags: [],
    loading: true,
    error: null,
    cartTotal: 2500,
    cartItems: [
        {
            id: 1,
            title: 'TestBag',
            count: 1,
            total: 300

        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {...state, bags: action.payload, loading: false, error: null};
        case 'FETCH_BOOKS_REQUEST':
            return {...state, bags: [], loading: true, error: null};
        case 'FETCH_BOOKS_FAILURE':
            return {...state, bags: [], loading: false, error: action.payload};
        default:
            return state;
    }
};

export default reducer;