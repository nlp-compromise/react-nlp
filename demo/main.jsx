'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import NlpTextArea from '../src/NlpTextArea.jsx'

class Main extends React.Component {
  constructor() {
    super()
    this.css = {
      container: {
        padding: 100
      }
    }
    this.state = {}
  }

  render() {
    let {state, css} = this
    return (<div style={css.container}>
      <NlpTextArea text='this is some text'/>
    </div>)
  }
}

module.exports = Main

window.setTimeout(function () {
  ReactDOM.render(
    <Main/>,
    document.getElementById('main')
  )
}, 500)
