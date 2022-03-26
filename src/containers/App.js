import React, { Component } from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Card/>
      </div>
      )
  }
}
