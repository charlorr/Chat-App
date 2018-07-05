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
                style={styles}
                className="MessageForm"
                onSubmit={this.handleSubmit}
            >
                <input
                    style={inputStyles}
                    autoFocus
                    required
                    type="text"
                    name="body"
                    placeholder="Message" // Add to which channel later
                    value={this.state.body}
                    onChange={this.handleChange}
                />
                <button type="submit" style={buttonStyles} >
                    Send
                </button>
            </form>
        )
    }
}

const styles = {
    backgroundColor: '#073642',
    height: '3rem',
    display: 'flex',
    alignItems: 'stretch',
    border: '2px solid #002b36',
    borderRadius: '0.5rem',
    margin: '0.25rem',
    padding: 0,
}

const iconStyles = {
    display: 'flex',
    borderRadius: '0.5rem',
    alignItems: 'center',
    backgroundColor: 'white',
    color: '#586e75',
    padding: '0 0.5rem',
    fontSize: '1.2rem',
}

const inputStyles = {
    flex: 1,
    fontSize: '1.2rem',
    border: 0,
    backgroundColor: '#073642'
}

const focusStyles = {
    outline: 0,
}

const buttonStyles = {
    fontSize: '1.5rem',
    backgroundColor: '#073642',
    color: '#fdf6e3',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    border: '1px solid #073642',
}

export default MessageForm

// Add focusStyles and iconStyles