import htmlData from "../json/html.json";
import React, { useState } from "react";
import "../style/codeEditor.css";
import { Link } from "react-router-dom";

export default function Form({ onNext, onPrev, currentSec }) {
  const formStyle = {
    marginTop: "10px",
    display: "block",
    backgroundColor: "white",
    padding: "20px",
    border: "1px solid black",
    borderRadius: "5px",
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
    fontSize: "16px",
    transition: "background-color 0.3s",
  };

  const nextButtonStyle = {
    backgroundColor: currentSec === 2 ? "#ccc" : "black",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  };

  const linkStyle = {
    textDecoration: "none",
  };

  const { htmlDocument } = htmlData;
  const { documentTypeDeclaration, html } = htmlDocument;
  const [code, setCode] = useState(`
  //Try To Do Somethig Creative Here
  <html>
  <form>
  <label for='name'>Name:</label>
  <input type='text' id='name' name='name' required>
  <br>
  <label for='email'>Email:</label>
  <input type='email' id='email' name='email' required>
  <br>
  <button type='submit'>Submit</button></form>
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
    <>
      <form style={formStyle}>
        <p>{html.form.textContent}</p>
        <p>Element: {html.form.element}</p>
        <p>Syntax: {html.form.syntax}</p>
        <Link to='/para' style={linkStyle}>
          <button style={buttonStyle} onClick={onPrev}>
            Prev
          </button>
        </Link>
        <Link to='/heading' style={linkStyle}>
          <button
            style={nextButtonStyle}
            onClick={onNext}
            disabled={currentSec === 2}>
            Next
          </button>
        </Link>
      </form>

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
          Console section
          <h2>Console Output:</h2>
          <textarea
            className='console-output'
            value={consoleOutput}
            readOnly
            placeholder='Console output will appear here'></textarea>
        </div> */}
      </div>
    </>
  );
}
