const React = require("react");
const ReactDOM = require("react-dom");
const Marked = require("marked");
const $ = require("jquery");

import {Component} from "react";

//import {observable} from "mobx";
//import {observer} from "mobx-react";
require('./sass/styles.scss');

class MarkdownPreviewer extends Component<any,any> {
    
    constructor() {
        super();
        this.updatePreview = this.updatePreview.bind(this);
    }

    updatePreview() {
        debugger;
        let markdown:string = $("#markdown").val();
        document.getElementById("preview").innerHTML = Marked(markdown);
    }
    
    render() {
        return (
            <div>
            <h1>Markdown Previewer</h1>
            <div className="row">
                <div className="col">
                    <textarea id="markdown" cols={80} rows={50} onChange={this.updatePreview} />
                </div>
            <div className="col">
                    Preview
                    <div id="preview" className="col"></div>
                </div>
            </div>
            </div>
        );
    }
}

ReactDOM.render(<MarkdownPreviewer/>, document.getElementById("markdownPreviewer"));