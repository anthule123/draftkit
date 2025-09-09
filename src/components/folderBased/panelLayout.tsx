'use client'
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { useState } from "react";
import { TreeNode } from "@/utils/types/TreeNode";
import TreeSideBar from "@/components/folderBased/TreeSideBar";

export default function PanelLayout(
    {children,tree} : {
        tree: TreeNode,
        children: React.ReactNode 
    }
){
    const init = (window.innerWidth>500)
    const [isShow, setIsShow] = useState(init);
    return (
        <div>
        <button onClick={(e) => {
            setIsShow(!isShow)}
            }>Mục lục </button>
            {isShow? <CaseOpen  tree={tree}>{children}</CaseOpen> 
                : <CaseClose tree={tree}>{children}</CaseClose> }        
        
        </div>
    )
}
export function CaseClose (
    {children,tree} : {
        tree: TreeNode,
        children: React.ReactNode 
    }
){
    return <div className="">{children}</div>
}

export function CaseOpen(
    {children,tree} : {
        tree: TreeNode,
        children: React.ReactNode 
    }
){
    return (
        <PanelGroup autoSaveId="example" direction="horizontal">
            <Panel defaultSize={25}>
                <TreeSideBar tree={tree}/>
            </Panel>
          <PanelResizeHandle
             className={`resizeHandler`}
         />
        <Panel>
            {children}
        </Panel>
 </PanelGroup>
        
    )
}