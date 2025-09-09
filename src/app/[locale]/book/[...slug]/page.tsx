
import { generateStaticParamsForBook } from '@/utils/slugSolve/slugBook';
import SlugPageBook from '@/utils/slugSolve/SlugPageBook';



export async function generateStaticParams() {
    return generateStaticParamsForBook()
}

export default async function BlogPage(
    props: {params: Promise<{ locale: string; slug: string[] }>}
) {
    return SlugPageBook({
        params: props.params
    })
}
