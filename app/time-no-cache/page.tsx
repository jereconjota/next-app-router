import Link from 'next/link'
import { type } from 'os'

type Time = {
  datetime: string;
}

export default async function Page() {

  const res = await fetch('http://worldtimeapi.org/api/timezone/America/New_York',
    {
      cache: 'no-store',
    }
  );
  const data: Time = await res.json();

  return <>
    <h1>Time no-cache</h1>
    <h1>Time: {data.datetime}</h1>
  </>
} 