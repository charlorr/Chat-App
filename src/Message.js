import React from 'react'

const Message = (props) => {
    return (
        <div className="Message" style={styles} >
            {props.message.user.displayName}: {props.message.body}
        </div>
    )
}

const styles = {
    display: 'flex',
    marginTop: '1rem',
    padding: '0 1rem',
    color: '#fdf6e3',
}

const detailStyles = {
    flex: 1,
    paddingLeft: '0.5rem',
}

export default Message