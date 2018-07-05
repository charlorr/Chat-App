import React from 'react'

const ChatHeader = () => {
return (
        <header className="ChatHeader" style={styles} >
            <div className="roomInfo" >
                <h2 style={roomStyles} >#general</h2>
                <p style={pStyles} >Announcements and general chat</p>
            </div>
        </header>
    )
}        

const styles = {
    backgroundColor: '#073642',
    borderBottom: '1px solid #ccc',
    height: '3rem',
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center'
}

const roomStyles = {
    fontSize: '1.1rem',
    margin: 0,
    color: '#fdf6e3',
}

const pStyles = {
    color: '#fdf6e3',
    margin: 0,
    fontSize: '0.8rem',
}

export default ChatHeader