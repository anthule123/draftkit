
import { generateStaticParamsForDocs } from '@/utils/slugSolve/slugDocs';
import SlugPageDocs from '@/utils/slugSolve/SlugPageDocs';



export async function generateStaticParams() {
    return generateStaticParamsForDocs('analysis')
}

export default async function BlogPage(
    props: {params: Promise<{ locale: string; slug: string[] }>}
) {
    return SlugPageDocs({
        bigRoute: 'analysis',
        params: props.params
    })
}
