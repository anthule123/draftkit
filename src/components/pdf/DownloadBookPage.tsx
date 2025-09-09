'use client'
import { useActionState } from "react";
import ILink from "@/components/langSwitch/ILink";
import { FormState } from "@/utils/types/FormState";
import bookAction from "@/utils/bookAction";

// app/download-book/page.tsx
export default  function DownloadBookPage() {
  
  const initialState: FormState = {
    error: undefined,
    success: false,
    message: undefined,
  };
  const [state, formAction] = useActionState(
    bookAction,
    initialState,
  );
  
    return (
      <div style={{ padding: '2rem' }}>
        <ILink href="/">
            <h1>DraftKit</h1>
          </ILink>
        <h2>Download Doc/Tutorial/Draft Book</h2>
        <p>Làm thêm tính năng tạo sách (khi dev).</p>
        <form action={formAction}>
          <label>Nhập tên route (big route + docsDiv + slug)</label>
          Ví dụ: 
          <ul>
            <li>learn/docs/Animals</li> 
            <li>learn/versioned_docs/1.0</li>
          </ul>
          <input name='route' />
          <button type='submit'>Tạo sách</button>
        </form>
        <a
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
        </a>
      </div>
    );
  }
  