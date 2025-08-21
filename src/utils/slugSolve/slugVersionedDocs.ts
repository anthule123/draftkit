import path from "path";
import { getAllDocPaths } from "../folderBased/getAllDocPaths";

export async function generateStaticParamsForVersionedDocs(
    bigRoute: string,
    versions: string[]
): Promise<{ locale: string; slug: string[], version: string}[]> {
    const supportedLocales = ['en', 'vi'] // danh sách ngôn ngữ bạn hỗ trợ
        
    const result: { locale: string; slug: string[]; version: string }[] = []
      
    for (const locale of supportedLocales) {
        for (const version of versions){
            const folderDir = path.join(process.cwd(), 
            `src/content/${locale}/${bigRoute}/versioned_docs/${version}/`);
            const paths = await getAllDocPaths(folderDir) // [[Animals, Fish, Carp], [Other, Path]]
    
            for (const pathArray of paths) {
                result.push({ 
                    locale: locale, 
                    slug: pathArray ,
                    version: version
                })
            }
        }
    }
    return result
}
