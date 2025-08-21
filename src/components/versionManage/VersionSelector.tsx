'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export function VersionSelector(
    { versions }: { versions: string[] })
 {
   const options = [...versions, 'latest']
  const router = useRouter()
  const searchParams = useSearchParams()
  const current = searchParams.get('v') ?? 'latest'

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVersion = e.target.value
    const newParams = new URLSearchParams(searchParams)
    newParams.set('v', newVersion)
    router.push(`?${newParams.toString()}`)
  }

  return (
    <div><label>Chọn phiên bản </label>
        <select value={current} onChange={handleChange}>
          {options.map((v: string) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
    </div>
  )
}
