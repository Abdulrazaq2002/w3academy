import React from "react";
import javascriptData from "../json/js.json";
import Jscompiler from "../javascript/jscompilar";
const JavaScriptComponent = () => {
  return (
    <div>
      <h2>Introduction to JavaScript</h2>
      <p>{javascriptData.javascript.introduction}</p>

      <h2>JavaScript Features</h2>
      <ul>
        {javascriptData.javascript.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h2>JavaScript Syntax</h2>
      <ul>
        {Object.entries(javascriptData.javascript.syntax).map(
          ([key, value]) => (
            <li key={key}>
              <strong>{key}</strong>: {value}
            </li>
          )
        )}
      </ul>

      <h2>JavaScript Examples</h2>
      <ul>
        {javascriptData.javascript.examples.map((example, index) => (
          <li key={index}>
            <p>
              <strong>{example.description}</strong>
            </p>
            <code>{example.code}</code>
          </li>
        ))}
      </ul>
      <Jscompiler />
      <h2>JavaScript Resources</h2>
      <ul>
        {javascriptData.javascript.resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link}>{resource.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JavaScriptComponent;
