
import PanelLayout2 from "@/components/folderBased/panelLayout2";
import { getContentTree } from "@/utils/folderBased/getContentTree";

type LayoutProps = {
    children: React.ReactNode
    params: Promise<{ locale?: string}>
  }
  
export default async function BlogLayout(
    { children, params }: LayoutProps
){ 
    const locale = (await params).locale || 'vi';
    const tree = getContentTree(
        {
            lang: locale,
            bigRoute: 'analysis',
            docsDiv: 'docs'
        }
    );
    return (
        <div className=''>
            <PanelLayout2
            tree = {tree}
           >{children} </PanelLayout2>
         
        </div>
        
    )
}