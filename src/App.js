import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "./App.css";
const styles = {
  root: {
    fontFamily: "'Helvetica', sans-serif",
    padding: 20,
    width: 600
  },
  editor: {
    border: "1px solid #ddd",
    cursor: "text",
    fontSize: 16,
    minHeight: 40,
    padding: 10
  },
  hashtag: {
    color: "rgba(95, 184, 138, 1.0)"
  }
};

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = editorState =>
      this.setState({
        editorState
      });
  }
  boldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }
  render() {
    return (
      <div style={styles.root}>
        <button onClick={this.boldClick.bind(this)}>Bold</button>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            default="hello some world"
            ref="editor"
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}

export default MyEditor;
