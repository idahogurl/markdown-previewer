"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const Marked = require("marked");
const $ = require("jquery");
const react_1 = require("react");
//import {observable} from "mobx";
//import {observer} from "mobx-react";
require('./sass/styles.scss');
class MarkdownPreviewer extends react_1.Component {
    constructor() {
        super();
        debugger;
        this.updatePreview = this.updatePreview.bind(this);
        this.state = { html: "", value: "" };
    }
    updatePreview(e) {
        this.setState({ html: Marked(e.target.value) });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Markdown Previewer"),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    React.createElement("h3", null, "Markdown"),
                    React.createElement(MarkdownInput, { value: this.state.value, changeHandler: this.updatePreview })),
                React.createElement("div", { className: "col" },
                    React.createElement("h3", null, "Preview"),
                    React.createElement(MarkdownPreview, { html: this.state.html })))));
    }
}
class MarkdownInput extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("textarea", { id: "markdown", cols: 80, rows: 43, onChange: this.props.changeHandler }));
    }
}
class MarkdownPreview extends react_1.Component {
    constructor() {
        super();
    }
    render() {
        return (React.createElement("div", { id: "preview", className: "col", dangerouslySetInnerHTML: { __html: this.props.html } }));
    }
}
ReactDOM.render(React.createElement(MarkdownPreviewer, null), document.getElementById("markdownPreviewer"));
