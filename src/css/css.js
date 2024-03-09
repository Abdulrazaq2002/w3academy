import Compiler from "./csscompile";
import cssData from "../json/css.json"; // Import the JSON data

const CssComponent = () => {
  return (
    <div>
      <h2>CSS Introduction</h2>
      <p>{cssData.css.introduction}</p>

      <h2>CSS Syntax</h2>
      <p>{cssData.css.syntax.selectors}</p>
      <p>{cssData.css.syntax.properties}</p>
      {/* Add more syntax details as needed */}

      <h2>CSS Common Problems and Solutions</h2>
      <ul>
        {cssData.css.problems.map((problem, index) => (
          <li key={index}>
            <strong>{problem.issue}</strong>: {problem.solution}
          </li>
        ))}
      </ul>

      <h2>CSS Examples</h2>
      <ul>
        {cssData.css.examples.map((example, index) => (
          <li key={index}>
            <p>
              <strong>{example.description}</strong>
            </p>
            <code>{example.code}</code>
          </li>
        ))}
      </ul>
      <Compiler />
      <h2>CSS Resources</h2>
      <ul>
        {cssData.css.resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link}>{resource.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CssComponent;
