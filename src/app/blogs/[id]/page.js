import Link from "next/link";

export default async function page({params}) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const blog = await res.json();
    return (
        <div className="mt-6">
            Post ID: {params.id}
            <h3>Name: {blog.title}</h3>
            <p>Description: {blog.body}</p>
            <br />
            <p className="pt-6"><Link href="/blogs">Back to Blogs Page</Link></p>
        </div>
    );
}
