import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.books.map(book => {
            return (
                <li key={book.title} onClick={() => this.props.handlBookSelect(book)} className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // Takes in state and maps it to props inside of the container
    return {
        books: state.books
    }
}

// Anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({handlBookSelect: selectBook}, dispatch);
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook - make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);