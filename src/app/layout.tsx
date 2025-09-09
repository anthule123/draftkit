import FontSwitcher from "@/components/FontSwitcher";
import LanguageSwitcher from "@/components/langSwitch/LanguageSwitcher";
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
          {children}
        </body>
       </html>
        
    )
  }      