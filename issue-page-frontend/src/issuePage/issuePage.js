import React, { Component } from 'react'
import SearchBar from '../searchBar/searchBar'
import IssueHolder from '../issueHolder/issueHolder'
import Pagination from '../pagenation/pagenation'

class issuePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            totalIssue: 0,
            closeIssue: 0,
            closed: undefined,
            // filter: 0
        }
        this.UpdateRecords = this.UpdateRecords.bind(this)
        this.updateFilter = this.updateFilter.bind(this)
    }

    updateFilter(value) {
        this.setState({ closed: value },()=>{this.UpdateRecords(0)})
        
    }

    UpdateRecords(page) {

        fetch('http://localhost:5400/list-issue?page=' + page + '&isclosed=' + this.state.closed).then((res) => {
            return res.json()
        }).then((data) => {
            this.setState({ data: data.data, totalIssue: data.issueCount, closeIssue: data.closeCount })
        })
    }

    render() {
        return (
            <div className='container mt-2'>
                <SearchBar filterHandler={this.updateFilter} />
                <IssueHolder data={this.state.data} openIssue={this.state.totalIssue - this.state.closeIssue} closeIssue={this.state.closeIssue} PageHandler={this.UpdateRecords} />
                <Pagination PageHandler={this.UpdateRecords} />
            </div>
        )
    }
}

export default issuePage
