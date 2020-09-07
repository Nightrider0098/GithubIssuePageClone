import React, { Component } from 'react'
import NewIssueButton from '../newIssueButton/newIssueButton'
export default class searchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            closed: undefined
        }
        this.filterSelectionHandler = this.filterSelectionHandler.bind(this)
    }

    filterSelectionHandler(e) {
        this.props.filterHandler(e)
    }
    render() {
        return (
            <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary dropdown-toggle btn-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filters</button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/#" onClick={() => this.filterSelectionHandler(undefined)}>Show all</a>
                        <a className="dropdown-item" href="/#" onClick={() => this.filterSelectionHandler(0)}>is Open</a>
                        <a className="dropdown-item" href="/#" onClick={() => this.filterSelectionHandler(1)}>is Closed</a>
                    </div>
                </div>
                <div className="input-group-prepend">
                    <span className="input-group-text" style={{ 'backgroundColor': 'white' }} id="basic-addon1"><i className="fa fa-search" style={{ 'color': 'black', 'backgroundColor': 'white' }} aria-hidden="true"></i>
                    </span>
                </div>
                <input type="text " className="form-control" id="inlineFormInputGroupUsername2" style={{"borderLeft":'none'}} placeholder="is:issue: is:open" />
                <button className="btn  ml-2 " style={{ 'border': '2px solid #adaaaa' }}><i className="fas fa-tag mr-1"></i>label<span className="badge badge-light badge-pill">4</span></button>
                <button className="btn  ml-2" style={{ 'border': '2px solid #adaaaa' }}><i className="fas fa-map-signs"></i> Milestone<span className="badge badge-light badge-pill">10</span></button>
                <NewIssueButton refreshPage={this.filterSelectionHandler} />
            </div >

        )
    }
}
