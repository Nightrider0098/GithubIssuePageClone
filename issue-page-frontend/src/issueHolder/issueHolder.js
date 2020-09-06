import React, { Component } from 'react'
import IssueSmall from '../IssueSmall/issueSmall'
export default class searchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { data: ['hites', 'hitesh123'], records: 10 }
        // this.RowsCreator = this.RowsCreator.bind(this)
        // this.UpdateRecords = this.UpdateRecords.bind(this)
    }

    componentDidMount() {
        this.props.PageHandler(0)
    }

    componentDidUpdate() {
        if (this.state.data !== this.props.data) {
            this.setState({ data: this.props.data })
        }
    }

    // UpdateRecords(page){
    //     fetch('http://localhost:5400/list-issue?page='+page).then((res) => {
    //         return res.json()
    //     }).then((data) => {
    //         this.setState({ data: data.data })
    //     })

    // }

    // componentDidUpdate() {

    //     if (this.state.data != this.props.data) {
    //         this.setState({ data: this.props.data })
    //     }
    // }

    RowsCreator() {
        var retun_arry = []
        for (var i = 0; i < this.state.records; i++) {
            retun_arry.push(<IssueSmall name={this.state.data[i]} />)
        }
        return retun_arry
    }

    render() {
        return (
            <div >
                <table className='table table-bordered rounded' style={{ 'border-spacing': '0px', 'border-collapse': 'separate' }} >
                    <thead class="thead-light">
                        <tr>
                            <th scope="col" style={{ 'text-align': 'left' }}>
                                <storng>528 Open</storng>
                            5.578 Closed
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.RowsCreator()}
                    </tbody>
                </table>
            </div>
        )
    }
}
