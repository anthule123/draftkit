import { generateStaticParamsForVersionedDocs } from '@/utils/slugSolve/slugVersionedDocs';
import SlugPageVersionedDocs from '@/utils/slugSolve/SlugPageVersionedDocs';


export async function generateStaticParams(){
    return generateStaticParamsForVersionedDocs(
        'learn',
        ['1.0']
    )
}

export default async function BlogPage(
   props: {params: Promise<{ 
            locale: string; slug: string[];
            version: string }>}
) {

    return SlugPageVersionedDocs({
        bigRoute: 'learn',
        params: props.params
    })
}
