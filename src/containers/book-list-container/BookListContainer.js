import React, {Component} from 'react'
import '../../components/book-list/BookList.css';
import {connect} from 'react-redux';
import withBookService from '../../components/hoc/withBookService';
import {fetchBooks} from '../../actions'
import {compose} from '../../utils/';
import Spinner from '../../components/spinner';
import ErrorIndicator from "../../components/error-indicator";
import BookList from "../../components/book-list";

class BookListContainer extends Component {

    componentDidMount() {

        this.props.fetchBooks();


    }

    render() {
        const {bags, loading, error} = this.props;

        if (loading) {

            return (<Spinner/>);
        }

        if (error) {
            return (<div>kjhg<ErrorIndicator errorMessage={error}/></div>);
        }


        return (
            <BookList bags={bags}/>
        )


    }

}

const mapStateToProps = ({bags, loading, error}) => {
    return {bags, loading, error};
};
const mapDispatchToProps = (dispatch, {service}) => {
    return {
        fetchBooks: fetchBooks(dispatch, service)
    };


};




export default compose(
    withBookService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)
;



