import Link from "next/link";

export default async function  blogs() {

    const blogs = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

    return (
        <div className="mt-6">
            Blogs List: 
            <ul className="mt-6 ml-6">
                {blogs.map(blog => <li className="mb-6" key={blog.id}> 
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                 </li>)}
            </ul>
        </div>
    );
}

