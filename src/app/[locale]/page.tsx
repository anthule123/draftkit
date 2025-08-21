// You now have access to the current locale

import { BigRouteCard } from "@/components/BigRouteCard"

const bigRouteSet = [
  {
    bigRoute: 'learn', 
    niceName: 'Góc học tập',
    enNiceName: 'Place to learn'
  },
  {
    bigRoute: 'draftkit-tutorial', 
    niceName: 'Hướng dẫn sử dụng drafkit',
    enNiceName: 'DraftKit Tutorial'
  },
  {
    bigRoute: 'curation', 
    niceName: 'Sưu tầm',
    enNiceName: 'Curation'
  },

]
export default async function Page({
    params,
  }: {
    params: Promise<{ locale: 'en'|'vi' }>
  }) {
    const { locale } = (await params) || 'vi'
    return (
        <div className='center'>
          <div className="grid">
            {bigRouteSet.map((item) => BigRouteCard(
              item.bigRoute,
              locale==='vi'? item.niceName: item.enNiceName
            ))}
          </div>
        </div>
    )
  }