import React from 'react'

const Avatar = ({ user }) => {
    const imageUrl = `https://api.adorable.io/avatar/40/${user.email}.png`
    
    return (
        <div
            className="Avatar"
            style={{
                ...styles,
                backgroundImage: `url(${imageUrl})`,
            }}
        ></div>
    )
}

const styles = {
    height: '40px',
    width: '40px',
    fontSize: '1rem',
    borderRadius: '20px',
    marginRight: '0.5rem',
}

export default Avatar