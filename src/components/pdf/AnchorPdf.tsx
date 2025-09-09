
import style from '@/css/components/Article.module.css';

export default function AnchorPdf({
  id 
}: {
  id: string
}) {
  return (
    <span className={style.forPdf}>

    [ANCHOR:{id}]
    </span>
  );
}
