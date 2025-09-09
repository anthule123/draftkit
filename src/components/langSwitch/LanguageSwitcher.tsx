// components/LanguageSwitcher.tsx
'use client'

import { ComposePath } from '@/utils/langSwitch/ComposePath'
import { extractComposePath } from '@/utils/langSwitch/extractComposePath'
import { translateComposePath } from '@/utils/langSwitch/translateComposePath'
import { usePathname, useRouter } from 'next/navigation'
import style from '@/css/layout/Header.module.css';

const locales = ['en', 'vi']

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname() || '/'

  const switchLanguage = async (newLocale: string) => {
    const segments = pathname.split('/') 
    const decodeURIPathname = decodeURI(pathname);  
    const currentCompose = extractComposePath(decodeURIPathname);
    if(!currentCompose) {
      segments[1] = newLocale // replace the locale in URL
      const newPath = segments.join('/')
      router.push(newPath)
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
      return;
    };
    // Dịch slug sang ngôn ngữ mới
    const newCompose = await translateComposePath(
      currentCompose as ComposePath, newLocale)
    console.log('Old compose:', currentCompose)
    console.log('Old slug:', currentCompose!.slug)
    console.log('New slug:', newCompose)
    // Xây dựng lại URL mới, giả sử locale là segment đầu tiên
    const newPath = `/${newLocale}/${newCompose.bigRoute}/${newCompose.docsDiv}/${newCompose.slug}`

    // Điều hướng sang URL mới
    router.push(newPath)

    // Lưu cookie để nhớ locale
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`

  
  }

  return (
    <div>
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={async () => switchLanguage(loc)}
          className=""
        >
          {loc === 'en' ? '🇬🇧' : '🇻🇳'}
        </button>
      ))}
    </div>
  )
}
