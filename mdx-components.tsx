import AnchorPdf from "@/components/pdf/AnchorPdf";
import LinktoPdf from "@/components/pdf/LinktoPdf";
import TocPdf from "@/components/pdf/TocPdf";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from 'next/image';
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Link,
    Image,
    TocPdf,
    AnchorPdf,
    LinktoPdf,
    ...components,
  };
}
