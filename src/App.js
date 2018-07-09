import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'
import { auth } from './base'

class App extends Component {
  constructor() {
    super()

    const user = JSON.parse(localStorage.getItem('user'))

    this.state = {
      user: user || {},
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(
      user => {
        if (user) {
          // User is signed in
          this.handleAuth(user)
        } else {
         // User is signed out
          this.handleUnath()
        }
      }
    )
  }
  
  handleAuth = (oAuthUser) => {
    const user = {
      uid: oAuthUser.uid,
      displayName: oAuthUser.displayName,
      email: oAuthUser.email,
      photoURL: oAuthUser.photoURL,
    }
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  signedIn = () => {
    return this.state.user.uid
  }

  signOut = () => {
    auth.signOut()
 }

  handleUnath =()  => {
    this.setState({ user: {} })
    localStorage.removeItem('user')
  } 

  render() {
    return (
      <div className="App">
        {
          this.signedIn() ? <Main user={this.state.user} signOut={this.signOut} /> : <SignIn />
        }
      </div>
    )
  }
}

export default App