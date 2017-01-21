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
        this.updatePreview = this.updatePreview.bind(this);
    }
    updatePreview() {
        debugger;
        let markdown = $("#markdown").val();
        document.getElementById("preview").innerHTML = Marked(markdown);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Markdown Previewer"),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    React.createElement("textarea", { id: "markdown", cols: 80, rows: 50, onChange: this.updatePreview })),
                React.createElement("div", { className: "col" },
                    "Preview",
                    React.createElement("div", { id: "preview", className: "col" })))));
    }
}
ReactDOM.render(React.createElement(MarkdownPreviewer, null), document.getElementById("markdownPreviewer"));
