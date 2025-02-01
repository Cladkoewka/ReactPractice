import { Link, useNavigate, useParams } from "react-router-dom"
import courses from "../data/courses.js"
import NotFound from "./NotFound.js"
import { useEffect } from "react"

const SingleCourse = () => {
  const params = useParams()
  const navigate = useNavigate()
  const course = courses.find((course) => course.slug === params.slug)

  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" })
    }
  }, [course])

  return (
    <div>
      <h1>{course?.title}</h1>
      <p>{course?.id}</p>
      <p>{course?.slug}</p>
      <Link to=".." relative="path">
        Back to courses
      </Link>
    </div>
  )
}

export default SingleCourse
