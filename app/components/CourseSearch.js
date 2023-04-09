'use client'

import { useState } from "react"

export default function CourseSearch({ getSearchResults }) {
    const [query, setQuery] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const res = await fetch(`/api/courses/search?q=${query}`)
        const courses = await res.json()
        getSearchResults(courses)
    }

    return (
        <form onSubmit={handleSubmit} className="text-center">
            <input type="text" className="rounded p-1 px-3" placeholder="Search Courses..." value={query} onChange={e => setQuery(e.target.value)} />
            <button className="bg-slate-400 hover:bg-slate-500 text-white ml-4 p-1 rounded" type="submit">Search</button>
        </form>
    )
}
