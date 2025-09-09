// scripts/generateBookPdf.ts
'use server'
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer'
import {PDFDocument, rgb, StandardFonts} from 'pdf-lib'
import Cookies from 'js-cookie';
import { FormState } from '@/utils/types/FormState';
import { getAllDocPaths } from './folderBased/getAllDocPaths';
import { exec } from 'child_process';
import util from 'util'; 
const execPromise = util.promisify(exec);

export default async function bookAction(
  prevState: FormState,
  formData: FormData,
) {
  const route = formData.get('route') as string;
  await generatePdfBook(route);
  return {
    success: true, 
    message: 'Tạo sách thành công',
    error: 'No error'
  }
}


async function fetchPagePdf(url: string): 
Promise<Buffer> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
 
  await page.goto(url, { waitUntil: 'networkidle0' });
 
await page.evaluate(() => {
  document.querySelectorAll('details').forEach(el => el.setAttribute('open', ''));
});
const myPDF = await page.pdf({
  printBackground: true,
  format: 'A4',
  margin: {
    top: '60px',
    bottom: '60px',
    left: '40px',
    right: '40px'
  }
});
  
  await browser.close();
  return Buffer.from(myPDF);
}

export async function generatePdfBook(route: string) {
  const lang = Cookies.get('NEXT_LOCALE') || 'vi'; // fallback mặc định
  const folderDir = path.join(process.cwd(), `src/content/${lang}/${route}/`)
  const nodes = await getAllDocPaths(folderDir);
  const urls = nodes.map((node: string[]) => {
  const path = node.map(encodeURI).join('/'); 
    return `http://localhost:3122/${lang}/book/${route}/${path}`})
    // urls = ['http://localhost:3102/blog/N%E1%BB%91/']
    const sections = await Promise.all(
      urls.map((url: string) => 
      fetchPagePdf(url))
    );
  const res = await mergePDFBuffers(sections);

}
async function mergePDFBuffers(pdfBuffers: Buffer[]) {
  const mergedPdf = await PDFDocument.create();

  // Merge các trang
  for (const buffer of pdfBuffers) {
    const pdf = await PDFDocument.load(buffer);
    const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    pages.forEach(page => mergedPdf.addPage(page));
  }

  // ===== Đánh số trang tại đây =====
  const totalPages = mergedPdf.getPageCount();
  const font = await mergedPdf.embedFont(StandardFonts.Helvetica);

  for (let i = 0; i < totalPages; i++) {
    const page = mergedPdf.getPage(i);
    const { width, height } = page.getSize();

    page.drawText(`${i + 1}`, {
      x: width / 2 - 50,
      y: 20, // vị trí từ bottom
      size: 10,
      font,
      // color: rgb(0.5, 0.5, 0.5),
    });
  }

  // ===== Lưu file =====
  const pdfBytes = await mergedPdf.save();
  const outputPath = path.join(process.cwd(), 'public', 'book.pdf');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, Buffer.from(pdfBytes));
  console.log('Merged PDF with page numbers saved at:', outputPath);

  // ===== Gọi solve_pdf.py =====
try {
  const pythonDir = path.join(process.cwd(),'python');
  const pythonBin = path.join(pythonDir, 'venv', 'bin', 'python3'); // hoặc Scripts\python.exe trên Windows
  const { stdout, stderr } = await execPromise(
    `${pythonBin} solve_pdf.py`,
    {cwd: pythonDir}
  )
  
  console.log('🐍 Python script output:', stdout);
  if (stderr) console.error('⚠️ Python script error:', stderr);
} catch (err) {
  console.error('❌ Lỗi khi chạy solve_pdf.py:', err);
}
}
