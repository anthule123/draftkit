
import PanelLayout2 from "@/components/folderBased/panelLayout2";
import { getContentTree } from "@/utils/folderBased/getContentTree";

type LayoutProps = {
    children: React.ReactNode
    params: Promise<{ locale?: string, version?: string}>
  }
  
export default async function BlogLayout(
    { children, params }: LayoutProps
){ 
    const locale = (await params).locale || 'vi';
    const version = (await params).version || '1.0.0';
    const tree = getContentTree(
        {
            lang: locale,
            bigRoute: 'draftkit-tutorial',
            docsDiv: `versioned_docs/${version}`
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