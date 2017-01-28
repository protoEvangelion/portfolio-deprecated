import React from 'react'
import Radium from 'radium'
import ReactMarkdown from 'react-markdown'
import marked from 'marked'
var Remarkable = require('remarkable')
var hljs = require('highlight.js')

const styles = {
  container: {
    border: '1px solid lightblue',
    borderRadius: '0',
    width: '50%',
    height: '100%',
    display: 'inline-block',
    position: 'absolute',
    top: '40px',
    padding: '10px 0 0 10px',
    textAlign: 'left',
  }
}

let Transformed = ({markdown}) => {
  var md = new Remarkable('full', {
  html:         false,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />)
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks
  linkify:      true,         // autoconvert URL-like texts to links
  linkTarget:   '',           // set target to open link in

  // Enable some language-neutral replacements + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if input not changed
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (__) {}

    return ''; // use external default escaping
  }
});

  function markitup() {
    let rawMarkup = md.render(markdown)
		return {
			__html: rawMarkup
		}
  }

  return(
    <div style={styles.container}>
      <div id="preview" dangerouslySetInnerHTML={markitup()}></div>
    </div>
  )
}

Transformed.propTypes = {
  markdown: React.PropTypes.string
}

export default Transformed = Radium(Transformed)
