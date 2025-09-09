'use client'
import React, { useState, useEffect } from 'react';
// Các font đã được import sẵn từ Google Fonts trong index.html hoặc qua styled-components...
const FONT_OPTIONS = [
  { name: 'Garamond EB', value: "'EB Garamond', 'EB Garamond Fallback'" },
  { name: 'Libertinus Serif', value: "'Libertinus Serif'"},
  {name: 'Times New Roman', value: "'Times New Roman', serif"},
  {name: 'Inter', value: "'Inter', 'Inter Fallback'"}
];

export default function FontSwitcher() {
  const [font, setFont] = useState(() => {
    return localStorage.getItem('preferredFont') || FONT_OPTIONS[0].value;
  });

  useEffect(() => {
    // Áp dụng font cho toàn bộ body hoặc phần cụ thể
    document.documentElement.style.setProperty('--content-font', font);  
    localStorage.setItem('preferredFont', font);
  }, [font]);

  return (
    <div>
      <label htmlFor="fontSwitcher">Chọn font chữ</label>
      <select
        id="fontSwitcher"
        value={font}
        onChange={(e) => setFont(e.target.value)}
      >
        {FONT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
