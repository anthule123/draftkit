

import Link from "next/link";
import ILink from "@/components/langSwitch/ILink";
import { DevOnlyDownload } from "@/components/pdf/DevOnlyDownload";

export default async  function Page() {

  if(process.env.NODE_ENV !== "production")
    return <DevOnlyDownload/>
  else 
    return (
      <div style={{ padding: '2rem' }}  
      className="center">
        <ILink href="/">
            <h2>Draft Kit</h2>
          </ILink>
        <h3>Download Doc/Tutorial/Draft Book</h3>
        <p className="">Kết nối tất cả các bài 
          viết lại thành 1 quyển sách. 
        </p>
        <p className="">Cách làm: Mở ở trạng thái dev
          rồi bấm nút Tạo sách. Còn khi ở trạng thái 
          production/đọc ở web static sẽ ko hiển thị đc nút 
          này vì nút này chuyên dùng cho back end.
        </p>
        <Link
        //   href="/blog-book.pdf"
        href='/output2.pdf'  
        download
          style={{
            padding: '1rem 2rem',
            background: '#0070f3',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: '1rem',
          }}
        >
          📘 Download PDF Book
        </Link>
      </div>
    );
  }
  