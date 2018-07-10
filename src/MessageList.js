import React from 'react'

import Message from './Message'

const MessageList = ({ messages, room }) => {
    return (
        <div className="MessageList" style={styles.messageList} >
            <div className="roomAnnouncement" style={styles.roomAnnouncement}>
                <h3 style={styles.h3}>
                    #{room.name}
                </h3>
                <p>This is the very beginning of the #general room.</p>
            </div>
            
            {
                messages.map(msg => (
                    <Message message={msg} key={msg.id} />
                ))
            }
            {// Scroll to bottom
            }
            <div style={{ float:"left", clear: "both" }}
                 ref={(el) => {this.messagesEnd = el }}>
            </div>
        </div>
    )
}

const styles = {
    messageList: {
        backgroundColor: '#073642',
        color: 'white',
        flex: 1,
        paddingBottom: '1rem',
        overflowY: 'scroll',
    },

    roomAnnouncement: {
        padding: '2rem 1rem',
    },

    h3: {
        fontSize: '1.5rem',
    },
}

// Need to add roomStyles to .roomAnnouncement and "" h3

export default MessageList