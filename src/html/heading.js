import htmlData from "../json/html.json";
import React, { useState } from "react";
import "../style/codeEditor.css";
import { Link } from "react-router-dom";

export default function Heading({ onNext, onPrev, currentSec }) {
  const headingStyle = {
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
    textDecoration: "none",
  };

  const linkStyle = {
    textDecoration: "none",
  };

  const { htmlDocument } = htmlData;
  const { documentTypeDeclaration, html } = htmlDocument;
  const [code, setCode] = useState(` //Try To Do Somethig Creative Here
  <html>
  <h1>This Is h1</h1>
  <h2>This Is h2</h2>
  <h3>This Is h3</h3>
  <h4>This Is h4</h4>
  <h5>This Is h5</h5>
  <h6>This Is h6</h6>
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
      <heading style={headingStyle}>
        <p>{html.heading.define}</p>
        <h1>{html.heading.h1.textContent}</h1>
        <h2>{html.heading.h2.textContent}</h2>
        <h3>{html.heading.h3.textContent}</h3>
        <h4>{html.heading.h4.textContent}</h4>
        <h5>{html.heading.h4.textContent}</h5>
        <h6>{html.heading.h6.textContent}</h6>
        <button
          style={buttonStyle}
          onClick={onPrev}
          disabled={currentSec === 0}>
          Prev
        </button>
        <Link to='/para'>
          <button style={buttonStyle} onClick={onNext}>
            Next
          </button>
        </Link>
      </heading>
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

// export default function Form({ prevSection, nextSection }) {
//   const { htmlDocument } = htmlData;
//   const { documentTypeDeclaration, html } = htmlDocument;
//   // const [currentSection, setCurrentSection] = useState(0);
//   // const nextSection = () => {
//   //   setCurrentSection((prevSection) => prevSection + 1);
//   // };

//   // const prevSection = () => {
//   //   setCurrentSection((prevSection) => prevSection - 1);
//   // };
//   return (
//     <>
//       <form>
//         <p>{html.form.textContent}</p>
//         <p>Element ;{html.form.element}</p>
//         <p>Syntax{html.form.syntax}</p>
//         <button onClick={prevSection}>Prev</button>
//         <button onClick={nextSection}>Next</button>
//       </form>
//     </>
//   );
// }
