type Repository = {
    id: number;
    stargazers_count: number;
    name: string;
    full_name: string;
};

async function getRepo(name: string): Promise<Repository> {
    const res = await fetch(`https://api.github.com/repos/vercel/${name}`);
    return res.json();
}

export async function generateMetadata({
    params,
}: {
    params: { name: string };
}) {
    const repo = await getRepo(params.name);
    return {
        title: repo.full_name,
        description: `The number of stars is ${repo.stargazers_count}`,
    };
}

export default async function Page({ params }: { params: { name: string } }) {
    const repo = await getRepo(params.name);
    return (
        <>
            <h1>{repo.full_name}</h1>
            <h2> {repo.stargazers_count} ⭐️</h2>
        </>
    );
}
