
'use client'

import { Dictionary, getDictionary } from '@/utils/dictionaries';
import Link from 'next/link';
import { useEffect, useState } from 'react'
export default function VersionFilterSimple(
    {   dict,
        lang,bigRoute,docsDivs,
    }:{
        dict: Dictionary,
        lang: string,
        bigRoute: string,
        docsDivs: string[],
    }
){

    const [selectedVersion, setSelectedVersion] = useState('docs')
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
             <nav>{dict?.versionManage.introLink}:  
                    <Link href={`/${lang}/${bigRoute}/${selectedVersion}`}>
                        {`  /${lang}/${bigRoute}/${selectedVersion}`}
                    </Link>
                </nav>
        
        </div>
    )
}