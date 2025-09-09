import createMDX from "@next/mdx";
import rehypeShiki from "@shikijs/rehype";
import remarkMath from 'remark-math'
import rehypeTypst from "@myriaddreamin/rehype-typst";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ?
   "/draftkit" : "",
};

if (process.env.NODE_ENV === "production") {
   nextConfig.output = "export";
  nextConfig.images = { unoptimized: true };
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
