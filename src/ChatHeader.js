import React from 'react'

const ChatHeader = () => {
    return (
        <header className="ChatHeader" style={styles.header} >
            <div className="roomInfo" >
                <h2 style={styles.h2} >#general</h2>
                <p style={styles.p} >Announcements and general chat</p>
            </div>
        </header>
    )
}        

const styles = {
    header: {
        backgroundColor: '#073642',
        borderBottom: '1px solid #ccc',
        height: '3rem',
        padding: '0 1rem',
        display: 'flex',
        alignItems: 'center'
    },

    h2: {
    fontSize: '1.1rem',
    margin: 0,
    color: 'white',
    },

    p: {
    color: '#ccc',
    margin: 0,
    fontSize: '0.8rem',
    },
}

export default ChatHeader