'use client'

import React, { useEffect, useRef, useState, ReactNode } from 'react'
import style from '@/css/components/Article.module.css'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

type Heading = {
  id: string
  text: string
  level: number
}

interface ArticleProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
}

const ArticleBook: React.FC<ArticleProps> = ({ children, className, ...props }) => {
  const articleRef = useRef<HTMLElement>(null)

  return (
    <div>
      <PanelGroup autoSaveId="article-book" direction="horizontal">
        <Panel defaultSize={80}>
          <article ref={articleRef} className={className} {...props}>
            {children}
          </article>
        </Panel>
        <PanelResizeHandle className={`${style.tocShow}`} />
      </PanelGroup>
    </div>
  )
}

export default ArticleBook

// Optional: nếu bạn muốn hiện TOC trong UI (web)
export function myToc(headings: Heading[]) {
  return (
    <nav>
      <h3>Mục lục bài viết</h3>
      <ul>
        {headings.map(({ id, text, level }) => (
          <li key={id} style={{ marginLeft: (level - 1) * 10 }}>
            <a href={`#${id}`}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
