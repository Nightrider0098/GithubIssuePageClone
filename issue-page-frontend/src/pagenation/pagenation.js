import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import './pagenation.css'
window.React = React;
export default class Paginations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            page: 0,
        }
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this)
        this.handlePageClick = this.handlePageClick.bind(this)
    }


    loadCommentsFromServer() {
        this.props.PageHandler(this.state.page)
    }

    componentDidMount() {
        this.loadCommentsFromServer();
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected);
        this.setState({ page: offset }, () => {
            this.loadCommentsFromServer();
        });
    };


    render() {
        return (
            <div id="react-paginate">
                <ReactPaginate
                    previousLabel={'< Previous'}
                    nextLabel={'Next >'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                /></div>
        );
    }
}

