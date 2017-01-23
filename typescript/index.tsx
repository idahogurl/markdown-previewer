const React = require("react");
const ReactDOM = require("react-dom");
const Marked = require("marked");
const $ = require("jquery");

import {Component} from "react";

//import {observable} from "mobx";
//import {observer} from "mobx-react";
require('./sass/styles.scss');

class MarkdownPreviewer extends Component<any,any> {
    markdown: string;
    constructor() {
        super();
        debugger;
        this.updatePreview = this.updatePreview.bind(this);
        this.state = {html: "", value:""}
    }

    updatePreview(e) {
        this.setState({html: Marked(e.target.value)});
    }
    
    render() {
        return (
            <div>
            <h1>Markdown Previewer</h1>
            <div className="row">
                <div className="col">
                     <h3>Markdown</h3>
                     <MarkdownInput value={this.state.value} changeHandler={this.updatePreview}/>
                </div>
            <div className="col">
                <h3>Preview</h3>
                <MarkdownPreview html={this.state.html} />
                </div>
            </div>
            </div>
        );
    }
}

class MarkdownInput extends Component<any, any> {
    constructor(props) {
        super(props);
    }
    render() {
    return (<textarea id="markdown" cols={80} rows={43} onChange={this.props.changeHandler}/>);
    }

}

class MarkdownPreview extends Component<any, any>{
    constructor() {
        super();
    }
    render() {
    return (<div id="preview" className="col" dangerouslySetInnerHTML={{__html: this.props.html}}></div>);
    }
}
ReactDOM.render(<MarkdownPreviewer/>, document.getElementById("markdownPreviewer"));