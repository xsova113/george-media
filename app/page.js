'use client';

import { useEffect, useState } from 'react'
import Courses from './components/Courses'
import LoadingPage from "./loading";
import CourseSearch from './components/CourseSearch';


const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCourses() {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <main className='prose dark:prose-invert prose-lg dark:bg-slate-800 mx-auto'>
        <h1 className='pt-20 text-white text-center'>Welcome to George Media</h1>
        <CourseSearch getSearchResults={(results) => setCourses(results)} />
        <Courses courses={courses}/>
    </main>
  )
}

export default HomePage