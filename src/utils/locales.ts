// utils/locales.ts
export const supportedLocales = ['en', 'vi', 'jp']

export function getLocaleStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}