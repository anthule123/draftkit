// You now have access to the current locale

import { BigRouteCard } from "@/components/BigRouteCard"
import { bigRoutes } from "@/utils/langSwitch/ComposePath"
import { Niconne } from "next/font/google"

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
  {
    bigRoute: 'analysis',
    niceName: 'Phân tích',
    enNiceName: 'Analyses'
  }

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