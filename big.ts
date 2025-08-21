


export const bigRoutes=[
    'curation',
    'draftkit-tutorial',
    'learn'
]
export type Compose ={
    lang: string, 
    bigRoute: string,
    slug: string
}
export function extractBigRoutes(path: string){
    const segments = path.split('/').filter(Boolean) // loại bỏ phần rỗng do dấu '/'    //b1: cái segments[1] là lang 
    
    if (segments.length < 2) return null // phải có lang + bigRoute 

    const lang = segments[0] 

    // dò bigRoute bằng cách kiểm tra từng route trong bigRoutes
    for (const route of bigRoutes) {
        const routeSegments = route.split('/')
        const candidate = segments.slice(1, 1 + routeSegments.length).join('/')

        if (candidate === route) {
        const slug = segments.slice(1 + routeSegments.length).join('/')
        return {
            lang,
            bigRoute: route,
            slug,
        }
        }
    }
    return null // không khớp route nào

}


console.log(extractBigRoutes('/vi/learn/docs/abc')) 