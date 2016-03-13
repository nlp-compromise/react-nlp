'use strict';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.css = {}
    this.overlay = this.overlay.bind(this)
  }
  overlay() {
    return (
      <div>
        {'overlay'}
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.overlay()}
        <textarea>
          {'overlay'}
        </textarea>
      </div>
    )
  }
}
module.exports = Main
