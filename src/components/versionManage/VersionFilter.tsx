
'use client'

import { useEffect, useState } from 'react'
export default function VersionFilter(
    {
        lang,bigRoute,docsDivs,
        children
    }:{
        lang: string,
        bigRoute: string,
        docsDivs: string[],
        children: React.ReactNode
    }
){
    const [selectedVersion, setSelectedVersion] = useState('docs')
    useEffect(() => {
        const allElements = document.querySelectorAll('[data-docs-version]')
        allElements.forEach(el => {
            const version = el.getAttribute('data-docs-version');
            (el as HTMLElement).style.display =
              version === selectedVersion ? 'block' : 'none'
          })
      }, [selectedVersion])
    return(
        <div>
            <label>Chọn phiên bản:</label>
            <select
                value={selectedVersion}
                onChange={(e) => setSelectedVersion(e.target.value)}
            >
                {docsDivs.map((ver) => (
                <option key={ver} value={ver}>
                    {ver}
                </option>
                ))}
            </select>
            <div>
    </div>
            {children}
        </div>
    )
}