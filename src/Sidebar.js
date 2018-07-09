import React from 'react'

import UserInfo from './UserInfo'
import RoomList from './RoomList'

const Sidebar = ({ user, signOut }) => {
  return (
    <aside className="Sidebar" style={styles.sidebar}>
      <UserInfo user={user} signOut={signOut} />
      <h1 style={styles.h1}>
        XTBC 18
      </h1>
      <RoomList />
    </aside>
  )
}

const styles = {
  sidebar: {
    backgroundColor: '#002b36',
    color: 'white',
    width: '16rem',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
  },

  children: {
    padding: '0 1rem',
  },

  h1: {
    color: 'white',
    fontSize: '1.2rem',
    marginTop: 0,
    padding: '0 1rem',
  }
}

export default Sidebar