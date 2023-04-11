import Link from 'next/link';

export default async function Page() {

  return <>
    <h1>Home</h1>
    <Link href="/about">About</Link> <br />
    <Link href="/time">Time</Link> <br />
    <Link href="/time-no-cache">Time no cache</Link> <br />
    <Link href="/time-and-data">Time and Data</Link> <br />
    <Link href="/repo/next.js">NextJS repo</Link> <br />
  </>
}