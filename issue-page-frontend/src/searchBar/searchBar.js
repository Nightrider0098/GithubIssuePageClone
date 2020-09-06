import React, { Component } from 'react'

export default class searchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">filter</div>
                </div>
                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeHolder="is:issue: is:open" />
                <button className="btn btn-light ml-2">label</button>
                <button className="btn btn-light ml-2">Milestone</button>
                <button className="btn btn-success ml-2">New Issue</button>
            </div>

        )
    }
}
