import React, { Component } from 'react'

export class newIssueButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            comment: ''
        }
        this.insertNewIssue = this.insertNewIssue.bind(this)
        this.titleHandler = this.titleHandler.bind(this)
        this.commentHandler = this.commentHandler.bind(this)

    }

    insertNewIssue() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: this.state.title, comment: this.state.comment })
        };
        fetch('http://localhost:5400/add-issue', requestOptions).then(res => { return res.json() }).then(res => {
            document.getElementById('closeModal').click()
        })
        this.props.refreshPage(undefined)



    }

    titleHandler(e) {
        this.setState({ title: e.target.value })
    }
    commentHandler(e) {
        this.setState({ comment: e.target.value })
    }

    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-success ml-2" data-toggle="modal" data-target="#exampleModal">New Issue</button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header pb-0">
                                <div className="form-group" style={{ 'width': '95%' }}>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Title" onChange={this.titleHandler} />
                                </div>
                                <button type="button" id='closeModal' className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body pb-0"><div className="form-group">

                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="want to add commment?"></textarea>
                            </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button " className="btn btn-success pull-right" data-dismiss="modal" onClick={this.insertNewIssue}>Submit new issue</button>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default newIssueButton
