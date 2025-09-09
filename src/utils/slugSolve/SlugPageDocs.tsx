import style from '@/css/components/Article.module.css';
import Article from '@/components/Article';
import ArticleBook from '@/components/pdf/ArticleBook';

export default async function SlugPageDocs({
    bigRoute,
    params,
  }: {
    bigRoute: string,
    params: Promise<{ locale: string; slug: string[] }>;
  }) {
    try {
      const { locale, slug } = await params;
      const decodedSlug = slug.map(decodeURIComponent).join('/');
      const { default: Post, metadata } = await import(
        `@/content/${locale}/${bigRoute}/docs/${decodedSlug}.mdx`
      );
      return (
        <div>
          <Article className={style.article}>
            <Post />
          </Article>
        </div>
      );
    } catch (error) {
      console.error('❌ Error loading blog post:', error);
      return (
        <div className="">
          <h1>Error</h1>
          <p>Sorry, there was an error loading this blog post.</p>
        </div>
      );
    }
}