import Link from "next/link"

export default function Courses({courses}) {
    return (
        <div>
            {courses.map(course => (
                <div key={course.id} className="card my-4 mx-10">
                    <h2 className="mt-4">{course.title}</h2>
                    <small>Level: {course.level}</small>
                    <p>{course.description}</p>
                    <Link href={course.link} className="bg-slate-200 p-2 rounded no-underline">Go to Course</Link>
                </div>
            ))}
        </div>
    )
}
