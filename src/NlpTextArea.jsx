'use strict';
import React from 'react'

class NlpTextArea extends React.Component {
  constructor(props) {
    super(props)
    this.css = {
      container: {
        'position': 'relative'
      },
      shared_text: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        fontFamily: 'Helvetica',
        fontSize: 20,
        padding: '10px 15px 0px 15px',
        margin: 0,
        color: 'grey'
      }
    }
    this.state = {
      text: props.text,
      trailing: '',
      parsed: nlp_compromise.text(props.text)
    }
    this.overlay = this.overlay.bind(this)
    this.onChange = this.onChange.bind(this)
    this.hiddenText = this.hiddenText.bind(this)
  }

  onChange() {
    let {state} = this
    let el = this.refs.textarea
    if (el) {
      state.text = el.value
      state.parsed = nlp_compromise.text(state.text)
    }
    state.trailing = state.text.match(/\s+$/) || ''
    this.setState(state)
  }

  overlay() {
    let {state, css} = this
    let spans = []
    state.parsed.terms().forEach(function (t, i) {
      let term_css = {
        color: 'white',
        position: 'relative',
        top: 2,
        left: 1
      }
      if (t.pos['Verb']) {
        term_css.backgroundColor = 'steelblue'
        term_css.opacity = 0.5
        term_css.color = 'white'
      } else {
        // term_css.visibility = 'hidden';
      }
      spans.push(<span key={i} style={term_css}>{t.text}</span>)
      spans.push(<span key={i + 'space'}>{' '}</span>)
    })
    return (
      <div style={css.shared_text}>
        {spans}
      </div>
    )
  }

  hiddenText() {
    let {state, css} = this
    let input_css = {
      backgroundColor: 'transparent',
      textIndent: -3
    }
    input_css = Object.assign(css.shared_text, input_css)
    //build the text-string from parsed terms
    let terms = state.parsed.terms()
    let text = terms.reduce(function (str, t) {
      str += t.text + ' '
      return str
    }, '').trim()
    text += state.trailing
    console.log(text)
    return <textarea
      style={input_css}
      ref='textarea'
      value={text}
      onChange={this.onChange}
      />
  }

  render() {
    let {state, css} = this
    return (
      <div style={css.container}>
        {this.overlay()}
        {this.hiddenText()}
      </div>
    )
  }
}
module.exports = NlpTextArea
