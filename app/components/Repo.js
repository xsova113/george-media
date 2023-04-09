import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
    const response = await fetch(`https://api.github.com/repos/xsova113/${name}`, {
        next: { revalidate: 60 }
    })
    const repo = await response.json()
    return repo;
}

export default async function Repo({ name }) {
    const repo = await fetchRepo(name)
    return (
        <>
            <h2 className="pt-8 font-bold text-3xl">{repo.name}</h2>
            <p className="">{repo.description}</p>
            <div className="flex justify-between pt-4">
                <div>
                    <FaStar className="inline align-baseline" />
                    <span>{repo.stargazers_count}</span>
                </div>
                <div>
                    <FaCodeBranch className="inline align-baseline" />
                    <span>{repo.forks_count}</span>
                </div>
                <div>
                    <FaEye className="inline align-baseline" />
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </>
    )
}
