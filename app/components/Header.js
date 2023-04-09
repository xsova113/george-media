// 'use client'

import Link from "next/link";


export default function Header() {
    return (
        <nav>
            <div className="flex space-x-20 bg-white p-5 text-black">
                <Link color='#nnn' className='font-bold text-2xl' underline='none' href='/'>George Media</Link>
                <div className="space-x-8">
                    <Link color='#nnn' underline='none' href='/about'>About</Link>
                    <Link color='#nnn' underline='none' href='/about/team'>Our Team</Link>
                    <Link color='#nnn' underline='none' href='/code/repos'>Code</Link>
                </div>
            </div>
        </nav>
    )
}

