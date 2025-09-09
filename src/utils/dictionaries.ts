import 'server-only'
import en from '@dictionary/en.json';

export type Dictionary = typeof en;

const dictionaries: Record<'en' | 'vi', () => Promise<Dictionary>> = {
  en: () => import('@dictionary/en.json').then((module) => module.default),
  vi: () => import('@dictionary/vi.json').then((module) => module.default),
};
 
export const getDictionary = async function (locale?: string)
: Promise<Dictionary> {
    if(locale==='en' || locale==='vi')
        return dictionaries[locale]();
    else 
        return dictionaries['vi']();
}


