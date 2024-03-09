import Header from "./component/hearder";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Course from "./pages/course";
import Heading from "./html/heading";
import Para from "./html/para";
import Form from "./html/form";
import Internet from "./courses/internet";
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
          <Route path='/' exact Component={Home} />
          <Route path='compiler' Component={Compiler} />
          <Route path='/course' Component={Course} />
          <Route path='/html' Component={Html} />
          <Route path='/heading' Component={Heading} />
          <Route path='/para' Component={Para} />
          <Route path='/form' Component={Form} />
          <Route path='/internet' Component={Internet} />
          <Route path='/css' Component={Css} />
          <Route path='/js' Component={Js} />
          <Route path='/about' Component={About} />
        </Routes>
      </Router>
    </>
  );
}
