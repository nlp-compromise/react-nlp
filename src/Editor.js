import React, { Component } from "react";
import { Editor, EditorState, RichUtils, CompositeDecorator } from "draft-js";
import styles from "./styles";
import { findNoun, renderNoun } from "./parse";

class MyEditor extends Component {
  constructor(props) {
    super(props);
    const compositeDecorator = new CompositeDecorator([
      {
        strategy: findNoun,
        component: renderNoun
      }
    ]);
    this.state = {
      editorState: EditorState.createEmpty(compositeDecorator)
    };
    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => {
      this.setState({
        editorState
      });
    };
  }
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            default="hello some world"
            ref="editor"
            spellCheck={false}
          />
        </div>
      </div>
    );
  }
}

export default MyEditor;
