import Link from "next/link"
import Repo from "../../../components/Repo"
import RepoDirs from "@/app/components/RepoDirs"
import { Suspense } from "react"



export default async function RepoPage({ params: { name } }) {

    return (
        <div className="card mx-60 my-4">
            <button><Link href='/code/repos' className="rounded bg-slate-200 p-1 text-sm">
                Back to Repositories
            </Link></button>

            <Repo name={name} />
            
            <Suspense fallback={<div className="text-center font-bold">Loading Directory...</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}
