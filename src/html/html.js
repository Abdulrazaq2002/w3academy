import React, { useState } from "react";
import htmlData from "../json/html.json";
import Form from "./form";
import Para from "./para";
import Heading from "./heading";
import Inter from "../pages/inter";

export default function HTML() {
  const { htmlDocument } = htmlData;
  const { documentTypeDeclaration, html } = htmlDocument;

  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    setCurrentSection((prevSection) => prevSection + 1);
  };

  const prevSection = () => {
    setCurrentSection((prevSection) => prevSection - 1);
  };

  return (
    <>
      <p>Practice This In Below Given IDE Inside "html" Tag</p>
      {currentSection === 0 && (
        <Inter
          onNext={nextSection}
          onPrev={prevSection}
          currentSec={currentSection}
        />
      )}
      {currentSection === 1 && (
        <Heading
          onNext={nextSection}
          onPrev={prevSection}
          currentSec={currentSection}
        />
      )}

      {currentSection === 2 && (
        <paired>
          <Para onNext={nextSection} onPrev={prevSection} />
        </paired>
      )}
      {currentSection === 3 && (
        <>
          <Form
            onNext={nextSection}
            onPrev={prevSection}
            currentSec={currentSection}
          />
        </>
      )}
    </>
  );
}
