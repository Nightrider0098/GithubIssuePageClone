import React, { Component } from 'react'

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
                    <td>
                        {JSON.stringify(this.state.name)}
                    </td>
                </tr>
            )
        else return <div style={{ 'display': 'none' }}></div>
    }
}
