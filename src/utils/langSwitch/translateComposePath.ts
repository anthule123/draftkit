import { ComposePath } from "./ComposePath"
import { LocaleFolderMapping } from "./LocaleFolderMaping"

export async function translateComposePath(
  compose: ComposePath, newLang: string): Promise<ComposePath>{
  const lang = compose.lang;
  const bigRoute = compose.bigRoute
  const docsDiv = compose.docsDiv
  const slugParts = compose.slug.split('/')

  // const decodedSlugParts = slugParts.map(decodeURIComponent);

  let nameImport = `/jsons/${bigRoute}/${docsDiv}`
  const newSlugParts: string[] = [] 

  // Lặp từng phần slug
  for (let i = 0; i < slugParts.length; i++) {
    const part = slugParts[i] 
    console.log('part', part)

    const isLast = i === slugParts.length - 1
    let transPart = '';
    let key;
    try {
      const name2 = nameImport + '/index.json'
      console.log('name2 la', name2)

      const res = await fetch(name2);
      const jsonList = await res.json();
      console.log('module', jsonList);
      const trans: LocaleFolderMapping[] = jsonList
      const sourceMap = trans.find(t => t.locale === lang)
      const targetMap = trans.find(t => t.locale === newLang)
      
      console.log('source Map', sourceMap);
      console.log('target Map', targetMap)
     
      if (!sourceMap || !targetMap) {
        newSlugParts.push(part)
      } else {
        // Nếu là folder con thì dùng mapFolders, file thì mapFiles
        if (isLast) {
          // mapFiles
          key = Object.entries(sourceMap.mapFiles).find(([, v]) => v === part)?.[0]
          transPart = key ? targetMap.mapFiles[key] ?? key : part;

        } else {
          // mapFolders
          key = Object.entries(sourceMap.mapFolders).find(([k, v]) => v === part)?.[0]
          transPart = key ? targetMap.mapFolders[key] ?? key : part
        }
        if(transPart) newSlugParts.push(transPart);
      }
    } catch {
      // Nếu ko có ../index.json thì giữ nguyên
      newSlugParts.push(part)
    }

    // Cập nhật currentPathParts để dịch folder con tiếp theo 
    const keyPart = key? key: part;
    nameImport = nameImport + `/${keyPart}`
    console.log('new name import', nameImport);
  }
  return {
    lang: newLang,
    bigRoute: bigRoute,
    docsDiv: docsDiv,
    slug: newSlugParts.map(encodeURIComponent).join('/')
  } as ComposePath

}
  
  
  