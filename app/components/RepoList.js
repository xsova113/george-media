import Link from "next/link"
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"


export default function RepoList(props) {
    const { repos } = props
    return (
        <ul className="">
            {repos.map(repo => (
                <li key={repo.id} className="card my-8 mx-40">
                    <div className="">
                        <Link href={`/code/repos/${repo.name}`} className="no-underline">
                            <h3 className="text-black">{repo.name}</h3>
                            <p className="text-black py-4">{repo.description}</p>
                            <div className="flex justify-between text-black">
                                <span>
                                    <FaStar className="inline align-baseline" /> {repo.stargazers_count}
                                </span>

                                <span>
                                     <FaCodeBranch className="inline align-baseline"/>  {repo.forks_count}
                                </span>
                                <span>
                                    <FaEye className="inline align-baseline"/> {repo.watchers_count}
                                </span>
                            </div>
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}
