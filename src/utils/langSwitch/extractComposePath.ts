import { bigRoutes, ComposePath } from "./ComposePath"

export function extractComposePath(path: string):
 ComposePath | null {
  const segments = path.split('/').filter(Boolean)

  if (segments.length < 2) return null

  const lang = segments[0]

  for (const route of bigRoutes) {
    const routeSegments = route.split('/')
    const baseIndex = 1 + routeSegments.length
    const candidate = segments.slice(1, baseIndex).join('/')

    if (candidate === route) {
      // kiểm tra docsDiv
      const next = segments[baseIndex]       // ví dụ: "docs" hoặc "versioned_docs"
      const next2 = segments[baseIndex + 1]  // ví dụ: "v1.2" nếu có

      let docsDiv = ''
      let slugSegments: string[] = []

      if (next === 'versioned_docs' && next2) {
        docsDiv = `versioned_docs/${next2}`
        slugSegments = segments.slice(baseIndex + 2)
      } else if (next) {
        docsDiv = next
        slugSegments = segments.slice(baseIndex + 1)
      } else {
        return null // thiếu docsDiv
      }

      return {
        lang:lang,
        bigRoute: route,
        docsDiv: docsDiv,
        slug: slugSegments.join('/'),
      } as ComposePath
    }
  }

  return null
}
