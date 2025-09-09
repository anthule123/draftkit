import createMDX from "@next/mdx";
import rehypeShiki from "@shikijs/rehype";
import remarkMath from 'remark-math'
import rehypeTypst from "@myriaddreamin/rehype-typst";

/** @type {import('next').NextConfig} */ 
const isGithubPages = process.env.NODE_ENV === 'production';
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
    remarkPlugins: ['remark-math', 'remark-gfm' ],
    rehypePlugins: [
      "@myriaddreamin/rehype-typst",
      [
        "@shikijs/rehype",
        {
          theme: "dark-plus",
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
