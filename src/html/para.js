import htmlData from "../json/html.json";
import React, { useState } from "react";
import "../style/codeEditor.css";
import { Link } from "react-router-dom";

export default function Para({ onNext, onPrev }) {
  const pairedStyle = {
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

  const linkStyle = {
    textDecoration: "none",
  };

  const { htmlDocument } = htmlData;
  const { documentTypeDeclaration, html } = htmlDocument;
  const [code, setCode] = useState(`
  //Try To Do Somethig Creative Here
  <html>
  <p>This Para</p>
  <div><p>This Is Div</p></div>
  <span><p>This Is Span</p></span>
  <ul>
      <p>This Is UnorderList</p>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
  </ul>
  <ol>
      <p>This Is OrderList</p>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
  </o>
  
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
      <paired style={pairedStyle}>
        <p>
          {html.pairedTags.paragraph.tagName}:{" "}
          {html.pairedTags.paragraph.textContent}
        </p>
        <div>
          {html.pairedTags.div.tagName}: {html.pairedTags.div.textContent}
        </div>
        <span>
          {html.pairedTags.span.tagName}: {html.pairedTags.span.textContent}
        </span>
        <ul>
          {html.pairedTags.ul.textContent}
          {html.pairedTags.ul.children.map((child) => (
            <li key={child.textContent}>{child.textContent}</li>
          ))}
        </ul>
        <ol>
          {html.pairedTags.ol.textContent}
          {html.pairedTags.ol.children.map((child) => (
            <li key={child.textContent}>{child.textContent}</li>
          ))}
        </ol>
        <Link to='/heading' style={linkStyle}>
          <button style={buttonStyle} onClick={onPrev}>
            Prev
          </button>
        </Link>
        <Link to='/form' style={linkStyle}>
          <button style={buttonStyle} onClick={onNext}>
            Next
          </button>
        </Link>
      </paired>

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
