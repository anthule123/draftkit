import createMDX from "@next/mdx";
import rehypeShiki from "@shikijs/rehype";
import remarkMath from 'remark-math'
import rehypeTypst from "@myriaddreamin/rehype-typst";
import remarkGfm from 'remark-gfm'
import bundler from '@next/bundle-analyzer'
/** @type {import('next').NextConfig} */ 
const isGithubPages = process.env.NODE_ENV === 'production';
const withBundleAnalyzer = bundler({
  enabled: process.env.ANALYZE === 'true',
});
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  trailingSlash: true,
  assetPrefix: isGithubPages ?"/draftkit" : "",
};

if (isGithubPages) {
   nextConfig.output = "export";
  nextConfig.images = { unoptimized: false };
  nextConfig.basePath = "/draftkit";
}


const withMDX = createMDX({
  // extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [
      rehypeTypst,
      [
        rehypeShiki,
        {
          theme: "dark-plus",
        },
      ],
    ],
  },
});

export default withMDX(withBundleAnalyzer(nextConfig));
