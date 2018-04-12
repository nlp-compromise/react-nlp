# react-nlp
a wip inline-editor for nlp-based display and interactions in react

[demo](https://unpkg.com/NlpTextArea@latest/demo/index.html)

The project renders a simple textarea that highlights the verbs in a sentence using the `compromise` NLP library.

![NlpTextArea](demo/demo.png?raw=true "NlpTextArea")


## Prerequisites
Install the following packages.  If they are not installed globally, you'll need to preface the references in `webpack.config.js` with `node_modules/.bin/`.
```
npm install -g webpack webpack-cli webpack-dev-server
```

## Install the dependencies
```
npm install
```

## Run the project
```
npm start
```

It should be visible at [http://0.0.0.0:8080/demo/](http://0.0.0.0:8080/demo/)

