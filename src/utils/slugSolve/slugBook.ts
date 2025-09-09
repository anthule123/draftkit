import path from "path";
import { getAllDocPaths } from "@/utils/folderBased/getAllDocPaths";

export async function generateStaticParamsForBook(
  ): Promise<{ locale: string; slug: string[] }[]> {
    const supportedLocales = ['en', 'vi']
  
    const result: { locale: string; slug: string[] }[] = []
  
    for (const locale of supportedLocales) {
      const folderDir = path.join(process.cwd(), `src/content/${locale}/`)
      const paths = await getAllDocPaths(folderDir) // [[Animals, Fish, Carp], ...]
      for (const pathArray of paths) {
        result.push({ locale, slug: pathArray })
      }
    }
    return result
}









