import Link from 'next/link'
import { type } from 'os'

type Time = {
  datetime: string;
}

export default async function Page() {

  const res = await fetch('http://worldtimeapi.org/api/timezone/America/New_York',
    {
      next: {
        // Next.js will attempt to revalidate the page in the background 
        //when a user navigates to it (every 5 seconds in this case)
        revalidate: 5,
      }
    }
  );
  const data: Time = await res.json();

  return <>
    <h1>Time no-cache</h1>
    <h1>Time: {data.datetime}</h1>
  </>
} 