
import { generateStaticParamsForDocs } from '@/utils/slugSolve/slugDocs';
import SlugPageDocs from '@/utils/slugSolve/SlugPageDocs';



export async function generateStaticParams() {
    return generateStaticParamsForDocs('learn')
}

export default async function BlogPage(
    props: {params: Promise<{ locale: string; slug: string[] }>}
) {
    return SlugPageDocs({
        bigRoute: 'learn',
        params: props.params
    })
}
