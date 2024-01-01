import AceEditor from 'react-ace';

// import "ace-builds/src-min-noconflict/ext-language_tools";
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import { useState } from 'react';

const CodeEditor = () => {
  const [fontSize, setFontSize] = useState(16);
  function onChange(newValue) {
    console.log('change', newValue);
  }
  const aceEditorStyles = {
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
  };
  return (
    <div className="grid grid-rows-5 gap-3 h-full">
      <div className="row-span-3" id="code-editor">
        <div
          className="p-2 pl-10 text-slate-200 rounded-t-2xl"
          style={{ backgroundColor: 'rgb(47, 49, 41)' }}
        >
          Code
        </div>
        <AceEditor
          mode="javascript"
          theme="monokai"
          onChange={onChange}
          name="code-editor"
          fontSize={fontSize}
          setOptions={{
            useWorker: false,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showPrintMargin: false,
          }}
          height="92%"
          width="100%"
          style={aceEditorStyles}
        />
      </div>
      <div className="row-span-2">
        <div className="grid grid-cols-2 gap-3 h-full">
          <div id="code-input">
            <div
              className="p-2 pl-10 text-slate-200 rounded-t-2xl"
              style={{ backgroundColor: 'rgb(47, 49, 41)' }}
            >
              Input
            </div>
            <AceEditor
              mode="javascript"
              theme="monokai"
              name="code-input"
              fontSize={fontSize}
              setOptions={{
                useWorker: false,
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showPrintMargin: false,
              }}
              height="89%"
              width="100%"
              style={aceEditorStyles}
            />
          </div>
          <div id="code-output">
            <div
              className="p-2 pl-10 text-slate-200 rounded-t-2xl"
              style={{ backgroundColor: 'rgb(47, 49, 41)' }}
            >
              Output
            </div>
            <AceEditor
              mode="javascript"
              theme="monokai"
              name="code-output"
              fontSize={fontSize}
              setOptions={{
                useWorker: false,
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showPrintMargin: false,
              }}
              height="89%"
              width="100%"
              style={aceEditorStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
