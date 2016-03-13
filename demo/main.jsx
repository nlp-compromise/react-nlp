'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
  constructor() {
    super()
    this.css = {}
    this.state = {}
  }

  render() {
    let {state, css} = this
    return
  }
}

module.exports = Main

window.setTimeout(function () {
  ReactDOM.render(
    <Main/>,
    document.getElementById('main')
  )
}, 500)
