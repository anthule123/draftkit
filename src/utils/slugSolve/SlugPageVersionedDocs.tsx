import style from '@/css/components/article.module.css';
import Article from '@/components/Article';

export default async function SlugPageVersionedDocs({
    bigRoute,
    params,
  }: {
    bigRoute: string,
    params: Promise<{ locale: string; slug: string[],version:string }>;
  }) {
    try {
      const { locale, slug,version } = await params;
      const decodedSlug = slug.map(decodeURIComponent).join('/');
      const { default: Post } = await import(
        `@/content/${locale}/${bigRoute}/versioned_docs/${version}/${decodedSlug}.mdx`
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