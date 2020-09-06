import React, { Component } from 'react'
import IssueSmall from '../IssueSmall/issueSmall'
export default class searchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { data: ['', ''], records: 10 }
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
                <table className='table table-bordered rounded table-hover mt-3' style={{ 'border-spacing': '0px', 'border-collapse': 'separate' }} >
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" style={{ 'text-align': 'left', 'padding': '0px' }}>
                                <div className='row'>
                                    <div className='col-lg-4 pt-3 pl-5'>
                                        <storng>{this.props.openIssue} Open</storng>
                                        {this.props.closeIssue} Closed
                                        </div>
                                    <div className='col-lg-2'></div>
                                    <div className='col-lg-6 '>
                                        <nav class="navbar navbar-expand-sm navbar-light sm-light" style={{ 'display': 'inline-block' }}>

                                            <div className=" collapse  navbar-collapse " id="navbarSupportedContent">
                                                <ul className="navbar-nav mr-auto ">
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link  dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Author</a>
                                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <a className="dropdown-item" href="/#">Action</a>
                                                            <a className="dropdown-item" href="/#">Another action</a>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link  dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Label</a>
                                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <a className="dropdown-item" href="/#">Action</a>
                                                            <a className="dropdown-item" href="/#">Another action</a>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link  dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</a>
                                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <a className="dropdown-item" href="/#">Action</a>
                                                            <a className="dropdown-item" href="/#">Another action</a>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link  dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Millestones</a>
                                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <a className="dropdown-item" href="/#">Action</a>
                                                            <a className="dropdown-item" href="/#">Another action</a>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link  dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Assignee</a>
                                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <a className="dropdown-item" href="/#">Action</a>
                                                            <a className="dropdown-item" href="/#">Another action</a>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link  dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort</a>
                                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <a className="dropdown-item" href="/#">Action</a>
                                                            <a className="dropdown-item" href="/#">Another action</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.RowsCreator()}
                    </tbody>
                </table>
            </div >
        )
    }
}
