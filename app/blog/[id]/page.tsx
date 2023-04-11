export async function generateMetadata({ params }: {
    params: { id: string } }) {
    return {
        title: `Blog Post ${params.id}`,
        description: `Blog Post ${params.id} description`,
    } 
}

export default function Page({ params, searchParams }: { params: { id: string }, searchParams: { otherParams?: string } }) {
    return (<>
        <h1>Blog Post</h1>
        <p>id: {params.id} </p>
        {searchParams.otherParams && <p>otherParams: {searchParams.otherParams}</p>}
    </>)
}