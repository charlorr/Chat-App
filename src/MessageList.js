import React from 'react'

import Message from './Message'

const MessageList = (props) => {
    return (
        <div className="MessageList" style={styles} >
            {
                props.messages.map(msg => (
                    <Message message={msg} key={msg.id} />
                ))
            }
        </div>
    )
}

const styles = {
    backgroundColor: '#073642',
    flex: 1,
    paddingBottom: '1rem',
    overflowY: 'scroll',
}

const roomStyles = {
    padding: '2rem 1rem',
}

const roomStylesThree = {
    fontSize: '1.5rem',
}

// Need to add roomStyles to .roomAnnouncement and "" h3

export default MessageList