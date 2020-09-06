import React, { Component } from 'react'
import SearchBar from '../searchBar/searchBar'
import IssueHolder from '../issueHolder/issueHolder'
import Pagination from '../pagenation/pagenation'

class issuePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
        this.UpdateRecords = this.UpdateRecords.bind(this)
    }


    UpdateRecords(page) {
        fetch('http://localhost:5400/list-issue?page=' + page).then((res) => {
            return res.json()
        }).then((data) => {
            this.setState({ data: data.data })
        })
    }

    render() {
        return (
            <div className='container mt-2'>
                <SearchBar />
                <IssueHolder data={this.state.data} PageHandler={this.UpdateRecords} />
                <Pagination PageHandler={this.UpdateRecords} />
            </div>
        )
    }
}

export default issuePage
