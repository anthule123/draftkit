import fitz  # PyMuPDF
import re
import sys 
print("Python executable:", sys.executable)
print("sys.path:", sys.path)
def extract_anchors(doc: fitz.Document):
    anchors = {}

    # Bước 1: Quét các anchor
    for page_num, page in enumerate(doc):
        text = page.get_text("text")
        for line in text.splitlines():
            if line.strip().startswith("[ANCHOR:") and line.strip().endswith("]"):
                inner = line.strip()[8:-1]
                instances = page.search_for(f"[ANCHOR:{inner}]")
                for rect in instances:
                    anchors[inner] = (page_num, rect)
                    print(f"🔖 Found anchor '{inner}' on page {page_num + 1} at {rect}")

    # Bước 2: Quét các link tới anchor
    for page_num, page in enumerate(doc):
        text = page.get_text("text")
        for line in text.splitlines():
            if line.strip().startswith("[LINKTO:") and line.strip().endswith("]"):
                inner = line.strip()[8:-1]
                instances = page.search_for(f"[LINKTO:{inner}]")
                for rect in instances:
                    if inner in anchors:
                        dest_page, _ = anchors[inner]
                        page.insert_link({
                            "from": rect,
                            "kind": fitz.LINK_GOTO,
                            "page": dest_page,
                        })
                        print(f"🔗 Linked [LINKTO:{inner}] → page {dest_page + 1}")
                    else:
                        print(f"⚠️ Anchor '{inner}' not found for link on page {page_num + 1}")
def clean_markers(doc):
    for page in doc:
        rects = page.search_for("[TOC:")
        for rect in rects:
            rect_expanded = fitz.Rect(rect.x0, rect.y0, rect.x1 + 200, rect.y1)  # Mở rộng sang phải 200 điểm
            page.add_redact_annot(rect_expanded, fill=(1, 1, 1))
        page.apply_redactions()


def extract_anchors_and_links(pdf_path: str, output_path: str):
    doc = fitz.open(pdf_path)
    toc = []

    pattern = re.compile(r"\[TOC:(.*?)\|(.*?)\|(\d+)\]")

    for page_num, page in enumerate(doc):
        full_text = page.get_text("text")
        matches = pattern.findall(full_text)
        for anchor_id, title, level in matches:
            try:
                level = int(level.strip()) # TOC level phải là zero-based
                toc.append([level, title.strip(), page_num + 1])
            except Exception as e:
                print(f"⚠️ Lỗi trong marker: {anchor_id}|{title}|{level} ({e})")

    doc.set_toc(toc)

    # Gọi xử lý anchor & internal link
    extract_anchors(doc)
    clean_markers(doc)
    doc.save(output_path)
    print(f"✅ PDF with TOC and internal links saved to {output_path}")
    doc.close()

    # Kiểm tra lại TOC
    result_doc = fitz.open(output_path)
    print("📑 Final TOC:", result_doc.get_toc())
    result_doc.close()

if __name__ == "__main__":
    extract_anchors_and_links("../public/book.pdf", "../public/output2.pdf")
