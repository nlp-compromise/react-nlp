import React from "react";
import styles from "./styles";
import nlp from "compromise";

export function findNoun(contentBlock, callback) {
  const text = contentBlock.getText();
  let doc = nlp(text);
  let nouns = doc.nouns().out("offsets");
  nouns.forEach(o => {
    callback(o.wordStart, o.wordEnd);
  });
}
export const renderNoun = props => {
  return (
    <span style={styles.red} data-offset-key={props.offsetKey}>
      {props.children}
    </span>
  );
};
