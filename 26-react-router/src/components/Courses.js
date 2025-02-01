import { Link } from "react-router-dom"
import courses from "../data/courses.js"

const Courses = () => {
  return courses.map((course) => (
    <div>
      <h1>{course.title}</h1>
      <p>{course.id}</p>
      <p>{course.slug}</p>
      <Link to={course.slug}>View course</Link>
    </div>
  ))
}

export default Courses
