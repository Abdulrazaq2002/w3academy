import Header from "./component/header"; // Corrected import statement
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Course from "./pages/course";
import Heading from "./html/heading";
import Para from "./html/para";
import Form from "./html/form";
import Internet from "./pages/internet";
import Html from "./html/html";
import Css from "./css/css";
import Js from "./javascript/javascript";
import Compiler from "./css/csscompile";
import About from "./pages/about";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/w3academy' element={<Home />} /> {/* Updated Route */}
          <Route path='/compiler' element={<Compiler />} />{" "}
          {/* Updated Route */}
          <Route path='/course' element={<Course />} /> {/* Updated Route */}
          <Route path='/html' element={<Html />} /> {/* Updated Route */}
          <Route path='/internet' element={<Internet />} />{" "}
          {/* Updated Route */}
          <Route path='/heading' element={<Heading />} /> {/* Updated Route */}
          <Route path='/para' element={<Para />} /> {/* Updated Route */}
          <Route path='/form' element={<Form />} /> {/* Updated Route */}
          <Route path='/css' element={<Css />} /> {/* Updated Route */}
          <Route path='/js' element={<Js />} /> {/* Updated Route */}
          <Route path='/about' element={<About />} /> {/* Updated Route */}
        </Routes>
      </Router>
    </>
  );
}
