
import style from '@/css/components/Article.module.css';

export default function LinktoPdf({
  id 
}: {
  id: string
}) {
  return (
    <span className={style.forPdf}>

      [LINKTO:{id}]
    </span>
  );
}
