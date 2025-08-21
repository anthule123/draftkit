import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "DraftKit",
    description: "Toolkit set up for drafts",
    keywords: ["text", "note","draft"],
    openGraph: {
      title: "Draft",
      description: "Toolkit set up for drafts",
    },
    
  };
  export default async function RootLayout({
    children,
  }:Readonly<{
    children: React.ReactNode
  }>) {
    return (
       <html>
        <body>
          <Link href='/' passHref><h2>Trang chủ</h2></Link>
          <LanguageSwitcher/>
          {children}

        </body>
       </html>
        
    )
  }      