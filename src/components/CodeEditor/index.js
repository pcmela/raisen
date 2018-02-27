import CodeMirror from "react-codemirror";
import React from 'react';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/sql/sql');
require('codemirror/mode/markdown/markdown');

let defaults = {
    sql: 'SELECT Id FROM Account',
	markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
	javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

export default class CodeEditor extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
			code: defaults.sql,
			readOnly: false,
			mode: 'text/x-sql',
		};
    };
    
	updateCode (newCode) {
		this.setState({
			code: newCode
		});
    }
    
	changeMode (e) {
		var mode = e.target.value;
		this.setState({
			mode: mode,
			code: defaults[mode]
		});
    }
    
	toggleReadOnly () {
		this.setState({
			readOnly: !this.state.readOnly
		}, () => this.refs.editor.focus());
    }
    
    render() {
        let options = {
			lineNumbers: true,
			readOnly: this.state.readOnly,
			mode: this.state.mode
		};
	    return <CodeMirror ref="editor" value={this.state.code} options={options} autoFocus={true} />
    };
}