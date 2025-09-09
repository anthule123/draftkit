'use client'

import TreeView from "./TreeView";
import style from '@/css/components/TreeView.module.css';
import { TreeNode } from "@/utils/types/TreeNode";
import Link from "next/link";


export default function TreeSideBar(
    { tree }: { tree: TreeNode }) {
    return (
      <div className={style.bar}>
        <div className={style.header}>
          <Link href={`${tree.path}`}  >
            <h3>{tree.path}</h3>
          </Link>
          
        </div>
        <div className={style.body}>
          <TreeView data={tree} />
        </div>
      </div>
    );
}