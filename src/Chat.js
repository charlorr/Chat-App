import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import base from './base'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [],
    }
  }
  
  /*scrollToBottom = () => {
    this.scrollBottom.scrollIntoView({ behavior: 'smooth' })
  }
  */

  
  componentDidMount() {
    this.syncMessages()
  }

  syncMessages() {
    // Stop syncing with the current endpoint
    if (this.messagesRef) {
      base.removeBinding(this.messagesRef)
    }
    this.path = `messages/${this.props.room.name}`
    console.log(this.path)
    this.messagesRef = base.syncState(this.path, {
      context: this,
      state: 'messages',
      asArray: true
    })
    //this.scrollToBottom();
  }

  componentDidUpdate(prevProps, _prevState, _snapshot) {
    if (prevProps.room.name !== this.props.room.name) {
      this.syncMessages()
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.messagesRef)
  }

  addMessage = (body) => {
    const messages = [...this.state.messages]
    const user = this.props.user

    messages.push({
      id: `${this.props.user.uid}-${Date.now()}`,
      user,
      body,
    })

    this.setState({ messages })
  }

  render() {
    return (
      <div className="Chat" style={styles} >
        <ChatHeader room={this.props.room} />
        <MessageList messages={this.state.messages} room={this.props.room} />
        <MessageForm addMessage={this.addMessage} />
      </div>
    )
  }
}

const styles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
}

export default Chat