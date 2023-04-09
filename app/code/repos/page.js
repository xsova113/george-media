import RepoList from "../../components/RepoList"


// export async function generateStaticParams() {
//     const response = await fetch('https://api.github.com/users/xsova113/repos')
//     const repos = await response.json()

//     return repos
// }


async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/xsova113/repos', {
        next: { revalidate: 60 }
    })
    const repos = await response.json()

    return repos
}


export default async function ReposPage() {
    const repos = await fetchRepos()

    return (
        <div>
            <h2 className="pl-8 text-white text-center text-3xl pt-8 font-bold">Repositories</h2>
            <RepoList repos={repos} />
        </div>
    )
}
