import "../style/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <ul className='header-menu'>
        <Link to='/' className='header-menu-link'>
          <li title='Home' className='header-menu-item'>
            Home
          </li>
        </Link>
        <Link to='/course' className='header-menu-link'>
          <li title='Course' className='header-menu-item'>
            Course
          </li>
        </Link>
        <Link to='/quiz' className='header-menu-link'>
          <li title='Quiz' className='header-menu-item'>
            Quiz
          </li>
        </Link>
        <Link to='/about' className='header-menu-link'>
          <li title='About' className='header-menu-item'>
            About
          </li>
        </Link>
        <Link to='/search' className='header-menu-link'>
          <li title='Search' className='header-menu-item'>
            Search
          </li>
        </Link>
      </ul>
    </>
  );
}
