import { Link, useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"
import courses from "../data/courses.js"
import { useEffect, useState } from "react"

const SORT_KEYS = ["title", "id", "slug"]

function sortCourses(courses, key) {
  if (!key || SORT_KEYS.includes(key)) {
    return courses
  }

  const sortedCourses = [...courses]
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
}

const Courses = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  console.log(sortKey)
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".")
      setSortKey()
      setSortedCourses(...courses)
    }
  }, [sortKey, navigate])

  return (
    <>
      <h2>{sortKey ? `Courses sorted by ${sortKey}` : "Courses"}</h2>
      {sortedCourses.map((course) => (
        <div>
          <h3>{course.title}</h3>
          <p>{course.id}</p>
          <p>{course.slug}</p>
          <Link to={course.slug}>View course</Link>
        </div>
      ))}
    </>
  )
}

export default Courses
