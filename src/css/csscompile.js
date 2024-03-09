import React, { useState } from "react";
import "../style/codeEditor.css";

export default function CodeEditor() {
  const [code, setCode] = useState(`
  //try to change color
<style>
  h1 {
    
    color: black;
  }
</style>

<html>
  <h1>Hello</h1>
</html>

`); // Combined code input
  const [output, setOutput] = useState(""); // Compiled output
  const [consoleOutput, setConsoleOutput] = useState(""); // Console output

  // Function to compile and display the output
  const compileCode = () => {
    const htmlCode = parseCode("html");
    const cssCode = parseCode("style");
    const jsCode = parseCode("script");

    // Create a function context to execute JavaScript code
    const consoleLogs = [];
    const consoleLog = (...args) => {
      consoleLogs.push(args.join(" "));
    };
    const consoleError = (...args) => {
      consoleLogs.push("[Error] " + args.join(" "));
    };
    try {
      // Create a new Function and pass the console functions as arguments
      const execute = new Function("console", `${jsCode}`);
      execute({ log: consoleLog, error: consoleError });
    } catch (error) {
      consoleError(error);
    }

    setOutput(`
      <!DOCTYPE html>
      <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>${htmlCode}</body>
      <script>${jsCode}</script>
      </html>
    `);

    setConsoleOutput(consoleLogs.join("\n"));
  };

  // Function to parse code based on language
  const parseCode = (lang) => {
    const langRegex = new RegExp(`<${lang}>(.*?)<\/${lang}>`, "s");
    const match = code.match(langRegex);
    return match ? match[1] : "";
  };

  return (
    <div className='code-editor-container'>
      <div className='code-editor'>
        {/* Single textarea for HTML, CSS, and JavaScript code */}
        <h2>Code Here:</h2>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder='Enter HTML, CSS, and JavaScript code'></textarea>
        <button onClick={compileCode}>Run</button>
      </div>
      <div className='output-container'>
        {/* Output section */}
        <h2>Output:</h2>
        <iframe
          id='output-frame'
          title='output'
          srcDoc={output}
          style={{
            width: "100%",
            height: "300px",
            border: "1px solid #ccc",
          }}></iframe>
      </div>
      {/* <div className='console-container'>
        <h2>Console Output:</h2>
        <textarea
          className='console-output'
          value={consoleOutput}
          readOnly
          placeholder='Console output will appear here'></textarea>
      </div> */}
    </div>
  );
}
