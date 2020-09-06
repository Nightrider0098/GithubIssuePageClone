import React, { Component } from 'react'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import FontAwesomeIcon  from '@fortawesome/fontawesome-svg-core'
import { dom } from '@fortawesome/fontawesome-svg-core'
// 
dom.watch()
export default class issueSmall extends Component {
    constructor(props) {
        super(props)
        this.state = { name: this.props.name }
    }

    componentDidUpdate() {
        if (this.state.name !== this.props.name) {
            this.setState({ name: this.props.name })
        }
    }
    render() {
        if (this.state.name !== undefined)
            return (
                <tr>
                    <td><div className='container'>
                        <div className="media">
                        <i className="fas fa-exclamation-circle fa-2x mr-2 text-success" ></i>
                        {/* <i className="fal fa-exclamation-circlefa-7x"></i> */}
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            {/* <i className="fal fa-exclamation-circle"></i> */}
                            {/* <FontAwesomeIcon icon="check-square" /> */}
                            <div className="media-body text-left  ">
                                <h5 className="mt-0 text-left"><strong>{this.state.name.topic}</strong></h5>
                                    #{this.state.name.id} opened {Math.floor((new Date() - new Date(this.state.name.creationdate)) / (1000 * 60 * 60 * 24))} days ago by {this.state.name.author}
                            </div>
                        </div></div>
                        {/* {JSON.stringify(this.state.name)} */}
                    </td>
                </tr>
            )
        else return <div style={{ 'display': 'none' }}></div>
    }
}
