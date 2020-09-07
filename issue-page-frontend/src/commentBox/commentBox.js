import React, { Component } from 'react'


class commentBox extends Component {

    render() {
        if (this.props.name !== undefined && this.props.name.commentCount > 0) {
            return (<div><i className="far fa-comment-alt mr-1"></i>{this.props.name.commentCount}</div>)
        }
        else {
            // return (<div >No comments</div>)
            return (<div style={{ 'display': 'none' }}></div>)
        }
    }
}
export default commentBox
