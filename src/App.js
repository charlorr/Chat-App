import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        uid: '012345', // Generate hash for this?
        displayName: 'charlorrnot',
        avatar: 'img/round-person-24px.svg',
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Main user={this.state.user} />
      </div>
    )
  }
}

export default App
