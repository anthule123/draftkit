
import { getAllDocPaths } from "@/utils/folderBased/getAllDocPaths";
import { ArticleMetadata } from "@/utils/types/ArticleMetadata";
import Link from "next/link";
type Card = {
    metadata: ArticleMetadata,
    path: string
}

export default async function TimelineList(
    {
        lang,bigRoute,docsDiv
    }:{
        lang: string,
        bigRoute: string,
        docsDiv: string
    }
){
    
    const nodes = await getAllDocPaths(`src/content/${lang}/${bigRoute}/${docsDiv}`);
    const cards = [];
    for (const node of nodes){
        const slugPath = node.map(decodeURIComponent).join('/');
        const { metadata} = await import(`@/content/${lang}/${bigRoute}/${docsDiv}/${slugPath}.mdx`) 
        
        const card = {} as Card;
        card.metadata = metadata;
        card.path = `${lang}/${bigRoute}/${docsDiv}/${slugPath}`
        cards.push(card)
        console.log('card', card)
    }
    cards.sort((a, b) => {
        const dateA = a.metadata?.date ?? '';
        const dateB = b.metadata?.date ?? '';
        return dateB.localeCompare(dateA);
        });
   
    return (
        <div>
           {IntroSentence(cards.length, lang)}
                    {cards.map((card, index) => (
                        <div 
                        className="card" key = {`${index}`}>
                            <Link href= {`/${card.path}`}><h3>{card.metadata?.title}</h3>
                            </Link>
                            {card.metadata?.date}

                        </div>
                    ))}
            </div>
                )
            
}
function IntroSentence(cardsLength: number, lang: string){
    if(lang==='vi') return `Có tất cả ${cardsLength} bài viết.`
    if(lang==='en' && cardsLength<2) return `There is ${cardsLength} article.`
    if(lang==='en') return `There are ${cardsLength} articles.`
    return ''
}
