import React, { Component } from "react";
import MonacoEditor, { MonacoDiffEditor } from "react-monaco-editor";

class App extends Component<{}, { code: string; originalCode: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      code: "// type your code...",
      originalCode: "function f()\n{  console.info('hi');\n}\n"
    };
  }
  editorDidMount = (editor: any, monaco: any) => {
    console.log("editorDidMount", editor);
    editor.focus();
  };
  onChange = (newValue: any, e: any) => {
    console.log("onChange", newValue, e);
  };
  render() {
    const { code, originalCode } = this.state;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div>
        <MonacoEditor
          height="600"
          language="javascript"
          theme="vs-light"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

export default App;
