import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

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
                className={`MessageForm ${css(styles.messageForm)}`}
                onSubmit={this.handleSubmit}
            >
                <div className={css(styles.icon)}>
                    <i className="fas fa-comment-alt"></i>
                </div>
                <input
                    autoFocus
                    required
                    className={css(styles.input)}
                    type="text"
                    name="body"
                    placeholder="Message" // Add to which channel later
                    value={this.state.body}
                    onChange={this.handleChange}
                />
                <button type="submit" className={css(styles.button)} >
                    <i className="far fa-paper-plane" title="Send"></i>
                </button>
            </form>
        )
    }
}

const styles = StyleSheet.create({
    messageForm: {
        backgroundColor: '#073642',
        height: '3rem',
        display: 'flex',
        alignItems: 'stretch',
        border: '2px solid #002b36',
        borderRadius: '0.5rem',
        margin: '0.25rem',
        padding: 0,
    },

    icon: {
        display: 'flex',
        borderRadius: '0.5rem',
        alignItems: 'center',
        backgroundColor: '#073642',
        color: '#586e75',
        padding: '0 0.5rem',
        fontSize: '1.2rem',
    },

    input: {
        flex: 1,
        fontSize: '1.2rem',
        border: 0,
        backgroundColor: '#073642',

        ':focus': {
            outline: 0,
            color: 'white'
        },
    },

    button: {
        fontSize: '1.5rem',
        backgroundColor: '#073642',
        color: '#fdf6e3',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',
        border: '1px solid #073642',
    }
})

export default MessageForm