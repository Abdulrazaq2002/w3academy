import React from "react";
import InternetJson from "../json/internet.json";
import "../style/internet.css";
import Footer from "../component/footer";

const Inter = () => {
  const { description, components, importance_for_frontend } =
    InternetJson.internet;

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
      </div>

      <Footer />
    </>
  );
};

export default Inter;
