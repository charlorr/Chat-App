import React, { Component } from 'react'

class MessageForm extends Component {
    state = {
        body: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addMessage(this.state.body)
        this.setState({ body: '' })
    }

    handleChange = (e) => {
        this.setState({ body: e.target.value })
    }

    render() {
        return (
            <form
                className="MessageForm"
                onSubmit={this.handleSubmit}
            >
                <input
                    autoFocus
                    required
                    type="text"
                    name="body"
                    placeholder="Message" // Add to which channel later
                    value={this.state.body}
                    onChange={this.handleChange}
                />
                <button type="submit">
                    Send
                </button>
            </form>
        )
    }
}

export default MessageForm