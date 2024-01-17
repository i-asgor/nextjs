import Link from "next/link";

export default function AboutLayout({children}){
    return(
        <div>
            <nav>
                <ul className="flex gap-6 m-6">
                    <li><Link href='/about/vision'>Vision</Link></li>
                    <li><Link href='/about/mision'>Mision</Link></li>
                </ul>
            </nav>
            {children}
        </div>
    )
}