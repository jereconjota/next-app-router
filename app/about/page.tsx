import Link from 'next/link'

export default async function Page() {
  return <>
    <h1>About</h1>
    <Link href="/blog/123">Blog Post</Link> <br />
    <Link href="/blog/123?otherParams=data">Blog Post with other data </Link>
  </>
} 