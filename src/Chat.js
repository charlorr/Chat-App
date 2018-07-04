import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [
        {
          id: 0,
          user: {
            uid: 123,
            displayName: 'Charlene',
            avatar: '' // Add image path if needed?
          },
          body: 'Yeet and skeet.',
        },
        {
          id: 1,
          user: {
            uid: 456,
            displayName: 'Lauren',
            avatar: '' // Same
          },
          body: 'Omg hiiii',
        },
      ], // Trailing comma
    }
  }

  addMessage = (body) => {
    const messages = [...this.state.messages]

    messages.push({
      id: `${this.props.user.uid}-${Date.now()}`,
      user: this.props.user,
      body,
    })

    this.setState({ messages })
  }
  
  render() {
    return (
      <div className="Chat">
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm addMessage={this.addMessage} />
      </div>
    )
  }
}

export default Chat