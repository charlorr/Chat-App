import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
//import { base } from './base'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [],
    }
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
/*
  componentWillMount() {
    this.messagesRef = base.syncState('messages', {
      context: this,
      state: 'messages',
      asArray: true
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.messagesRef)
  }
*/
  render() {
    return (
      <div className="Chat" style={styles} >
        <ChatHeader />
        <MessageList messages={this.state.messages} />
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