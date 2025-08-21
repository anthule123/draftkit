// components/ILink.tsx
'use client'; // nếu dùng Next.js App Router

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ILinkProps {
  href: string;
  children: React.ReactNode;
  [key: string]: unknown; // Để nhận thêm các props như className,.
}

const ILink = ({ href, children, ...props }: ILinkProps) => {
  const [localeHref, setLocaleHref] = useState(href);

  useEffect(() => {
    const value = document.cookie
    .split('; ')
    .find(row => row.startsWith('NEXT_LOCALE='))
    const value2 = value?.split('=')[1] || null
    const locale = value2 || 'vi'; // fallback mặc định
    const localized = `/${locale}/${href.replace(/^\/+/, '')}`; // loại bỏ '/' đầu nếu có
    setLocaleHref(localized);
  }, [href]);

  return <Link href={localeHref} {...props}>{children}</Link>;
};

export default ILink;

