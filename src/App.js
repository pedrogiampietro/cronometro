import React, { Component } from 'react'
import './style.css'

class App extends Component {

  constructor (props) {
    super (props)
    this.state = {
      number: 0,
      btn: 'Start'
    }

    this.start = this.start.bind(this)
    this.clean = this.clean.bind(this)
    this.timer = null

  }

  start () {
    let state = this.state

    if (this.timer !== null) {

      clearInterval(this.timer)
      this.timer = null
      state.btn = 'Start'

    } else {

      this.timer = setInterval(() => {
        let state = this.state
        state.number += 0.1
        this.setState(state)
      }, 100)

      state.btn = 'Stop'
    }
    this.setState(state)
  }

  clean () {

    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }

    let state = this.state
    state.number = 0
    state.btn = 'Start'
    this.setState(state)
  }

  render () {
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img"/>
         <a className="timer">{this.state.number.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="btn" onClick={this.start}>{this.state.btn}</a>
          <a className="btn" onClick={this.clean}>Clean</a>
        </div>
      </div>
    )
  }
}


export default App;