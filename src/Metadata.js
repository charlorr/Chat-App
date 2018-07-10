import React from 'react'

const Metadata = ({ message }) => {
  //getCurrentTime() {
    //const d = new Date()
   // const d.getHours < 12) 
   // return
 // }
  
  return (
    <div
      className="Metadata"
      style={styles.metadata}
    >
      <div style={styles.user}>
        {message.user.displayName}
      </div>
      <div style={styles.time}>
        4:20 AM
      </div>
    </div>
  )
}

const styles = {
  metadata: {
    display: 'flex',
    alignItems: 'baseline',
  },

  user: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },

  time: {
    color: '#999',
    fontSize: '0.8rem',
  },
}

export default Metadata