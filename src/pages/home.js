import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/home.css";
import Footer from "../component/footer";

export default function Home() {
  const [message, setMessage] = useState("");
  // if (refresh) {
  useEffect(() => {
    const Welmsg = (
      <p>
        Welcome to The <u>w3academy</u>, A Learning Platform
      </p>
    );
    const timeoutId = setTimeout(() => {
      setMessage(Welmsg);
    }, 0);

    // Clear the timeout after 5 seconds
    const timeoutIdToClear = setTimeout(() => {
      setMessage("");
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutIdToClear);
    };
  }, []);
  // }

  return (
    <>
      <header className='home-div'>
        <p className='message'>{message}</p>
      </header>
      <section className='roadmap-section'>
        <div className='Roadmap'>
          <p>How To Be A Web-dev:-</p>

          <p>
            1. Learn{" "}
            <Link title='./Html' className='link' to='/html'>
              Html
            </Link>
          </p>
          <p>
            2. Learn{" "}
            <Link title='./CSS' className='link' to='/css'>
              CSS
            </Link>
          </p>
          <p>
            3. Learn{" "}
            <Link title='./JAVASCRIPT' className='link' to='/js'>
              JAVASCRIPT
            </Link>{" "}
          </p>
          <p>4. Practice Making Dummy Sites </p>
          <p>5. Explore More Web-Dev World</p>
        </div>
        <img
          className='img-map'
          src='https://powerslides.com/wp-content/uploads/2021/12/Web-Development-Roadmap-1.png'
          alt='RoadMap'
        />
        <Link to='/languages'></Link>
      </section>
      <Footer />
    </>
  );
}
