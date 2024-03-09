import React from "react";
import Compliar from "../css/csscompile";
import cssData from "../json/css.json"; // Import the JSON data

const CssExample = ({ description, code }) => {
  return (
    <div>
      <p>
        <strong>{description}</strong>
      </p>
      <code>{code}</code>
      <Compliar />
    </div>
  );
};

export default CssExample;
