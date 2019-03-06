import React, { FunctionComponent, useState } from "react";
import MonacoEditor from "react-monaco-editor";
import Fit from "react-fit";

const Monaco: FunctionComponent = () => {
  const [code, setCode] = useState("");
  const [editor, setEditor] = useState();

  const onChange = (newValue: any, e: any) => {
    console.log("onChange", newValue, e);
    setCode(newValue);
  };

  const editorDidMount = (editor: any, monaco: any) => {
    console.log("editorDidMount", editor);
    editor.focus();
    setEditor(editor);
  };

  const options = {
    selectOnLineNumbers: true
  };

  return (
    <Fit
      target={size => (
        <div
          onMouseOver={() => {
            if (editor) editor.focus();
          }}
        >
          <MonacoEditor
            height={size.height}
            language="javascript"
            theme="vs-light"
            value={code}
            options={options}
            onChange={onChange}
            editorDidMount={editorDidMount}
          />
        </div>
      )}
    />
  );
};

export default Monaco;
