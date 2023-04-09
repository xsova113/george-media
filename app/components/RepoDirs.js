import Link from "next/link"


async function fetchRepoContents(name) {
    const response = await fetch(`https://api.github.com/repos/xsova113/${name}/contents`, {
        next: { revalidate: 60 }
    })
    const contents = await response.json()
    return contents
}

export default async function RepoDirs({ name }) {
    const contents = await fetchRepoContents(name)
    const dirs = contents.filter(content => content.type === 'dir')

    return (
        <>
            <h3 className="mt-4 font-bold text-xl">Directories</h3>
            <ul className="list-disc mx-8 my-4">
                {dirs.map(dir => (
                    <li key={dir.path} className="card my-3 p-2 bg-slate-600">
                        <Link className="text-sm text-slate-100" href={`/code/repos/${name}/${dir.path}`}>
                            {dir.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
