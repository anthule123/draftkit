import "@/css/globals.css";
import { garamond, inter, libertinus_math, libertinus_serif, merriweather } from "@/app/fonts";

type Params = {
  locale?: string
}
import { getDictionary } from '@/utils/dictionaries'
import Link from "next/link";
import Header from "@/components/layout/Header";

export async function generateStaticParams(): Promise<Params[]>{
    
    const result =  [{ locale: 'vi' }, { locale: 'en' },
        // { locale: undefined as any }
    ]
    if(!result || result.length===0){
        return [{locale: 'not-found'}];
    }
    return result
}
export default async function RootLayout({
  children,params
}:Readonly<{
  children: React.ReactNode
  params: Promise<{ locale?: string}>
}>) {
  const {locale: lang} = await params
  const dict = await getDictionary(lang) // en

  return (
      <div  className={` ${garamond.variable}
                          ${inter.variable}
                          ${merriweather.variable}
                          ${libertinus_math.variable}
                          ${libertinus_serif.variable}
              antialiased`}
      >
        <Header dict={dict}/>
        {children}
      </div>
  )
}      