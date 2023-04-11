import Link from 'next/link';

type Repository = {
  id: number;
  stargazers_count: number;
  name: string;
  full_name: string;
};

async function getRepositoryData(): Promise<Repository> {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const data: Repository = await res.json();
  return data;
}

async function getTime(): Promise<string> {
  const res = await fetch('http://worldtimeapi.org/api/timezone/America/New_York',
  {
    next: {
      revalidate: 5,
    }
  });
  const data = await res.json();
  return data.datetime;
}

export default async function Page() {

  const [data, time] = await Promise.all([getRepositoryData(), getTime()]);

  return <>
    <h1>Time and Data</h1>
    <h2>Time: {time}</h2>
    <h2>Repository: {data.full_name}</h2>
    <h3>Stargazers: {data.stargazers_count} ⭐️</h3>
  </>
}