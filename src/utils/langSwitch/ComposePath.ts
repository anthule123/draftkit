export const bigRoutes = [
  'curation', 'draftkit-tutorial', 'learn',
  'analysis'
]
import path from 'path'
import { LocaleFolderMapping } from '@/utils/langSwitch/LocaleFolderMaping'

export type ComposePath = {
  lang: string
  bigRoute: string
  docsDiv: string
  slug: string
}
