import React from "react";
import InternetJson from "../json/internet.json";
import "../style/internet.css";
import Footer from "../component/footer";
import { Link } from "react-router-dom";

const Inter = ({ onNext, onPrev, currentSec }) => {
  const { description, components, importance_for_frontend } =
    InternetJson.internet;
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

  return (
    <>
      <div className='int-div'>
        <div className='internet-container'>
          <h2 className='section-title'>Description:</h2>
          <p className='description'>{description}</p>

          <h2 className='section-title'>Components:</h2>
          <ul className='component-list'>
            {components.map((component, index) => (
              <li key={index}>
                <strong>{component.name}:</strong> {component.description}
                <br />
                {component.protocal && (
                  <ul className='protocol-list'>
                    {Object.values(component.protocal).map((value, index) => (
                      <li key={index}>
                        <strong>{value}</strong>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <h2 className='section-title'>Importance for Frontend:</h2>
          <ul className='importance-list'>
            {importance_for_frontend.map((point, index) => (
              <li key={index}>
                <strong>{point.point}:</strong> {point.description}
              </li>
            ))}
          </ul>
        </div>
        <button
          style={buttonStyle}
          onClick={onPrev}
          disabled={currentSec === 0}>
          Prev
        </button>
        <Link to='/heading'>
          <button style={buttonStyle} onClick={onNext}>
            Next
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Inter;
