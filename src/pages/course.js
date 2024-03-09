import { Link } from "react-router-dom";
import "../style/course.css"; // Import CSS file for styling

export default function Course() {
  return (
    <div className='course-container'>
      <h1 className='course-item'>
        <h1 className='course-item'>
          <Link to='/inter'>Internet</Link>
        </h1>
        <ol>
          <Link to='/html'>Html</Link>
          <Link to='/heading'>
            <li>Heading</li>
          </Link>
          <Link to='/para'>
            <li>Para</li>
          </Link>
          <Link to='/form'>
            <li>Form</li>
          </Link>
        </ol>
      </h1>
      <h1 className='course-item'>
        <Link to='/css'>CSS</Link>
      </h1>
      <h1 className='course-item'>
        <Link to='/js'>JavaScript</Link>
      </h1>
    </div>
  );
}
