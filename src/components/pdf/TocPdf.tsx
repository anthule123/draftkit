import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import style from '@/css/components/Article.module.css';
function generateAnchorId() {
  return `anchor-${uuidv4().slice(0, 8)}`;
}

export default function TocPdf({
  title,
  level,
}: {
  title: string;
  level: number;
}) {
  const anchorId = useMemo(() => generateAnchorId(), []);

  return (
    <span className={style.forPdf}>
      [TOC:{anchorId}|{title}|{level}]
    </span>
  );
}
