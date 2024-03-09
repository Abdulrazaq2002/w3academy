import React from "react";
import "../style/internet.css";
import Footer from "../component/footer";

const Inter = () => {
  const internetData = {
    description:
      "The Internet is a global network of interconnected computers and devices that communicate with each other using standardized protocols.",
    components: [
      {
        name: "Servers",
        description:
          "Computers or devices that store and serve content or data to users. Servers host websites, web applications, and other online services.",
      },
      {
        name: "Clients",
        description:
          "Devices used by users to access content or services hosted on servers. Examples include desktop computers, laptops, smartphones, and tablets.",
      },
      {
        name: "Protocols",
        description:
          "Standardized rules and procedures that govern how data is transmitted and exchanged over the Internet. Common protocols include HTTP, HTTPS, TCP/IP, and DNS.",
        protocol: {
          http: "1. HTTP (Hypertext Transfer Protocol): Used for transferring hypertext documents on the World Wide Web.",
          https:
            "2. HTTPS (Hypertext Transfer Protocol Secure): Provides secure communication over a computer network.",
          tcp: "3. TCP/IP (Transmission Control Protocol/Internet Protocol): Defines how data is transmitted across networks.",
          dns: "4. DNS (Domain Name System): Translates domain names into IP addresses.",
        },
      },
    ],
    importance_for_frontend: [
      {
        point: "Website Accessibility",
        description:
          "Understanding how the Internet works helps frontend developers ensure that their websites are accessible to users worldwide.",
      },
      {
        point: "Data Exchange",
        description:
          "Knowledge of Internet protocols and communication mechanisms enables frontend developers to create efficient and responsive user experiences.",
      },
      {
        point: "Security",
        description:
          "Frontend developers need to be aware of security best practices to protect users' data and privacy.",
      },
      {
        point: "Performance Optimization",
        description:
          "Knowledge of Internet protocols helps developers improve website performance and user experience.",
      },
    ],
  };

  return (
    <>
      <div className='int-div'>
        <div className='internet-container'>
          <h2 className='section-title'>Description:</h2>
          <p className='description'>{internetData.description}</p>

          <h2 className='section-title'>Components:</h2>
          {internetData.components.map((component, index) => (
            <p key={index}>
              <strong>{component.name}:</strong> {component.description}
            </p>
          ))}

          <h2 className='section-title'>Protocols:</h2>
          <p>
            {Object.values(internetData.components[2].protocol).map(
              (value, index) => (
                <span key={index}>
                  {value}
                  <br />
                </span>
              )
            )}
          </p>

          <h2 className='section-title'>Importance for Frontend:</h2>
          {internetData.importance_for_frontend.map((point, index) => (
            <p key={index}>
              <strong>{point.point}:</strong> {point.description}
            </p>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Inter;
